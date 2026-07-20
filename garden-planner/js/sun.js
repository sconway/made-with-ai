/* ============================================================
   sun.js — Solar position & daylight math
   Formulas after Astronomy Answers (Aa) / NOAA, same derivation
   used by SunCalc. All angles in radians unless noted.
   ============================================================ */

const Sun = (() => {
  const R = Math.PI / 180;
  const DAY_MS = 86400000;
  const J1970 = 2440588;
  const J2000 = 2451545;
  const OBLIQUITY = R * 23.4397;

  function toDays(date) {
    return date.getTime() / DAY_MS - 0.5 + J1970 - J2000;
  }

  function solarMeanAnomaly(d) {
    return R * (357.5291 + 0.98560028 * d);
  }

  function eclipticLongitude(M) {
    // equation of center + perihelion of Earth
    const C = R * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M));
    const P = R * 102.9372;
    return M + C + P + Math.PI;
  }

  function sunCoords(d) {
    const M = solarMeanAnomaly(d);
    const L = eclipticLongitude(M);
    return {
      dec: Math.asin(Math.sin(OBLIQUITY) * Math.sin(L)),
      ra: Math.atan2(Math.sin(L) * Math.cos(OBLIQUITY), Math.cos(L)),
    };
  }

  function siderealTime(d, lw) {
    return R * (280.16 + 360.9856235 * d) - lw;
  }

  /**
   * Sun position for a JS Date at lat/lng.
   * @returns {azimuth} radians clockwise from true north (0 = N, PI/2 = E)
   * @returns {altitude} radians above the horizon
   */
  function position(date, lat, lng) {
    const lw = R * -lng;
    const phi = R * lat;
    const d = toDays(date);
    const c = sunCoords(d);
    const H = siderealTime(d, lw) - c.ra;

    const altitude = Math.asin(
      Math.sin(phi) * Math.sin(c.dec) + Math.cos(phi) * Math.cos(c.dec) * Math.cos(H)
    );
    // atan2 form yields azimuth measured from south, clockwise westward
    let azimuth = Math.atan2(
      Math.sin(H),
      Math.cos(H) * Math.sin(phi) - Math.tan(c.dec) * Math.cos(phi)
    );
    azimuth += Math.PI; // rebase: 0 = true north, clockwise
    azimuth = ((azimuth % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    return { azimuth, altitude };
  }

  /** Solar-time timezone estimate from longitude (whole hours). */
  function tzOffsetHours(lng) {
    return Math.round(lng / 15);
  }

  /**
   * Build a Date for `hourDec` local (solar-estimated) time on day-of-year
   * `doy` of `year`, at a place whose tz offset is `tz` hours.
   */
  function localDate(year, doy, hourDec, tz) {
    return new Date(Date.UTC(year, 0, doy, 0, 0, 0) + (hourDec - tz) * 3600000);
  }

  const HORIZON = -0.833 * R; // standard refraction + solar radius

  /**
   * Sunrise / sunset / solar noon for a given day, found by scanning
   * altitude at 2-minute resolution (robust at high latitudes).
   * Returns hours in location-local decimal time, or null when the sun
   * never rises / never sets.
   */
  function dayInfo(year, doy, lat, lng, tz) {
    const STEP = 2 / 60; // hours
    let sunrise = null, sunset = null, noon = 12, maxAlt = -Infinity;
    let prevUp = position(localDate(year, doy, 0, tz), lat, lng).altitude > HORIZON;

    for (let h = STEP; h <= 24; h += STEP) {
      const { altitude } = position(localDate(year, doy, h, tz), lat, lng);
      const up = altitude > HORIZON;
      if (up && !prevUp && sunrise === null) sunrise = h;
      if (!up && prevUp && sunset === null) sunset = h;
      if (altitude > maxAlt) { maxAlt = altitude; noon = h; }
      prevUp = up;
    }

    const alwaysUp = sunrise === null && sunset === null && maxAlt > HORIZON;
    const alwaysDown = maxAlt <= HORIZON;
    if (alwaysUp) { sunrise = 0; sunset = 24; }

    return {
      sunrise, sunset, solarNoon: noon,
      maxAltitude: maxAlt,
      daylight: alwaysDown ? 0 : (sunset ?? 24) - (sunrise ?? 0),
      polarDay: alwaysUp,
      polarNight: alwaysDown,
    };
  }

  function formatHour(hourDec) {
    if (hourDec === null || hourDec === undefined) return '—';
    let h = Math.floor(hourDec), m = Math.round((hourDec - h) * 60);
    if (m === 60) { h += 1; m = 0; }
    const ampm = h >= 12 ? 'pm' : 'am';
    const h12 = ((h + 11) % 12) + 1;
    return `${h12}:${String(m).padStart(2, '0')}${ampm}`;
  }

  return { position, tzOffsetHours, localDate, dayInfo, formatHour, HORIZON };
})();
