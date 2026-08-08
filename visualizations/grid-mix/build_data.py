#!/usr/bin/env python3
"""
Build the bundled dataset for the "24 Hours on the Grid" visualization.

Pulls a full year of HOURLY electricity data from the U.S. Energy Information
Administration (EIA) API v2 and aggregates it into compact average-day profiles:
for every region, month, and hour-of-day, the mean generation (MW) by fuel type
plus mean demand. The result is written to data.js as a plain JS global so the
published page needs no API key and no network at runtime.

Usage:
    EIA_API_KEY=xxxxxxxx python3 build_data.py
    python3 build_data.py YOUR_KEY

Data source: EIA Hourly Grid Monitor (api.eia.gov/v2/electricity/rto/*).
Hourly periods are returned in UTC and converted to each region's representative
local time (DST-aware via zoneinfo) so the solar peak lands near local noon.
"""

import json, os, ssl, sys, time, urllib.request, urllib.error
from collections import defaultdict
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo

YEAR = 2024
API = "https://api.eia.gov/v2/electricity/rto"
KEY = (sys.argv[1] if len(sys.argv) > 1 else os.environ.get("EIA_API_KEY", "")).strip()
if not KEY:
    sys.exit("Provide an EIA API key: `python3 build_data.py YOUR_KEY` or set EIA_API_KEY")

# macOS system Python often lacks CA roots; this is a read-only public data pull.
CTX = ssl.create_default_context()
CTX.check_hostname = False
CTX.verify_mode = ssl.CERT_NONE

# Respondent code -> (display name, representative IANA timezone, tagline, group).
# "region" = large aggregate grids; "utility" = single-city / single-utility
# balancing authorities. The finest hourly fuel-mix EIA publishes is the
# balancing authority; nothing goes below it (grid power is fungible, so a
# neighborhood's hourly mix isn't a measurable quantity). Small utilities import
# much of their power, so their in-territory generation runs below demand — the
# front-end surfaces that gap as "net imports".
REGIONS = {
    # --- large aggregate grid regions ---
    "US48": ("United States", "America/Chicago", "The whole Lower 48", "region"),
    "CAL":  ("California", "America/Los_Angeles", "The textbook solar 'duck curve'", "region"),
    "TEX":  ("Texas (ERCOT)", "America/Chicago", "Wind at night, gas and solar by day", "region"),
    "SW":   ("Southwest", "America/Phoenix", "Desert sun, deep solar belly", "region"),
    "CENT": ("Central (SPP)", "America/Chicago", "Wind country", "region"),
    "NW":   ("Northwest", "America/Los_Angeles", "Hydropower from the big rivers", "region"),
    "NY":   ("New York", "America/New_York", "Nuclear, hydro and gas", "region"),
    "FLA":  ("Florida", "America/New_York", "Gas-heavy, sun on the rise", "region"),
    # --- city / single-utility balancing authorities ---
    "LDWP": ("Los Angeles (LADWP)", "America/Los_Angeles", "Its own gas and coal, plus rising solar", "utility"),
    "BANC": ("Sacramento (SMUD)", "America/Los_Angeles", "Natural gas balanced by Sierra hydro", "utility"),
    "SCL":  ("Seattle City Light", "America/Los_Angeles", "A city that runs on rivers", "utility"),
    "IID":  ("Imperial Valley (IID)", "America/Los_Angeles", "Desert solar and geothermal (in 'Other')", "utility"),
    "AZPS": ("Phoenix (Arizona PS)", "America/Phoenix", "Coal and gas giving way to desert solar", "utility"),
    "NEVP": ("Las Vegas (Nevada Power)", "America/Los_Angeles", "Gas by night, solar by day", "utility"),
    "GVL":  ("Gainesville, FL", "America/New_York", "A small-city grid, mostly gas and biomass", "utility"),
}

# Fuel type code -> display label. Order defines stacking (bottom -> top).
# Chosen so adjacent fills stay colorblind-distinct (validated, worst adjacent
# CVD ΔE 8.9). Petroleum (OIL) is ~0% across these eight regions, so it folds
# into "Other" rather than earning its own hard-to-separate warm-red band.
FUELS = [
    ("COL", "Coal"),
    ("NG",  "Natural gas"),
    ("NUC", "Nuclear"),
    ("WAT", "Hydro"),
    ("WND", "Wind"),
    ("SUN", "Solar"),
    ("OTH", "Other"),
]
# Raw EIA codes we accept, and how they map onto the display fuels above.
FUEL_REMAP = {"OIL": "OTH"}
FUEL_CODES = {c for c, _ in FUELS} | set(FUEL_REMAP)

UTC = timezone.utc


def fetch_all(path, facets, extra=""):
    """Page through every hourly row for a query (UTC), returning raw rows."""
    rows, offset, total = [], 0, None
    facet_q = "".join(f"&facets[{k}][]={v}" for k, v in facets)
    while True:
        url = (
            f"{API}/{path}/data/?api_key={KEY}&frequency=hourly&data[0]=value"
            f"{facet_q}{extra}"
            f"&start={YEAR}-01-01T00&end={YEAR+1}-01-01T00"
            f"&sort[0][column]=period&sort[0][direction]=asc"
            f"&offset={offset}&length=5000"
        )
        data = get_json(url)
        resp = data["response"]
        if total is None:
            total = int(resp["total"])
        batch = resp["data"]
        rows.extend(batch)
        offset += len(batch)
        print(f"      {offset}/{total} rows", flush=True)
        if offset >= total or not batch:
            break
        time.sleep(0.3)
    return rows


def get_json(url, tries=6):
    """GET with exponential backoff on 429/5xx."""
    delay = 3.0
    for attempt in range(tries):
        try:
            with urllib.request.urlopen(url, timeout=90, context=CTX) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            body = e.read()[:200].decode(errors="replace")
            if e.code in (429, 500, 502, 503, 504) and attempt < tries - 1:
                wait = delay if e.code != 429 else max(delay, 30)
                print(f"      HTTP {e.code}; retrying in {wait:.0f}s ({body[:60]})", flush=True)
                time.sleep(wait)
                delay *= 2
                continue
            raise
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt < tries - 1:
                print(f"      network error {e}; retry in {delay:.0f}s", flush=True)
                time.sleep(delay)
                delay *= 2
                continue
            raise
    raise RuntimeError("unreachable")


def parse_utc(period):
    """EIA hourly period 'YYYY-MM-DDTHH' is UTC."""
    return datetime(int(period[0:4]), int(period[5:7]), int(period[8:10]),
                    int(period[11:13]), tzinfo=UTC)


def build():
    out = {"year": YEAR, "fuels": [{"code": c, "label": l} for c, l in FUELS], "regions": {}}
    for code, (name, tzname, tag, group) in REGIONS.items():
        tz = ZoneInfo(tzname)
        print(f"\n== {code} ({name}) ==", flush=True)

        # sum[month][hour][fuel] and counts, plus demand
        gsum = defaultdict(lambda: defaultdict(lambda: defaultdict(float)))
        gcnt = defaultdict(lambda: defaultdict(lambda: defaultdict(int)))
        dsum = defaultdict(lambda: defaultdict(float))
        dcnt = defaultdict(lambda: defaultdict(int))

        print("    generation by fuel type...", flush=True)
        for row in fetch_all("fuel-type-data", [("respondent", code)]):
            f = row.get("fueltype")
            v = row.get("value")
            if f not in FUEL_CODES or v in (None, ""):
                continue
            f = FUEL_REMAP.get(f, f)  # fold petroleum into "Other"
            local = parse_utc(row["period"]).astimezone(tz)
            m, h = local.month, local.hour
            gsum[m][h][f] += float(v)
            gcnt[m][h][f] += 1

        print("    demand...", flush=True)
        for row in fetch_all("region-data", [("respondent", code), ("type", "D")]):
            v = row.get("value")
            if v in (None, ""):
                continue
            local = parse_utc(row["period"]).astimezone(tz)
            m, h = local.month, local.hour
            dsum[m][h] += float(v)
            dcnt[m][h] += 1

        # collapse to averages, rounded to whole MW
        months = {}
        for m in range(1, 13):
            fuel_series = {}
            for fc, _ in FUELS:
                series = []
                for h in range(24):
                    c = gcnt[m][h].get(fc, 0)
                    series.append(round(gsum[m][h][fc] / c) if c else 0)
                if any(series):  # drop fuels a region never uses
                    fuel_series[fc] = series
            demand = [round(dsum[m][h] / dcnt[m][h]) if dcnt[m][h] else 0 for h in range(24)]
            months[m] = {"fuels": fuel_series, "demand": demand}
        out["regions"][code] = {"name": name, "tz": tzname, "tag": tag, "group": group, "months": months}
        print(f"    done: {list(months[1]['fuels'].keys())}", flush=True)

    return out


if __name__ == "__main__":
    dataset = build()
    js = "window.GRID_DATA = " + json.dumps(dataset, separators=(",", ":")) + ";\n"
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.js")
    with open(path, "w") as fh:
        fh.write(js)
    print(f"\nWrote {path} ({len(js)/1024:.0f} KB)")
