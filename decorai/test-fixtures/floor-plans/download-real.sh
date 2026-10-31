#!/bin/sh
# Downloads real-world floor plans used to test DXF / PDF import.
# These come from public GitHub repositories that don't state a license, so they are
# kept out of git (see .gitignore) — run this script to fetch them locally.
set -e
cd "$(dirname "$0")"
mkdir -p real
fetch() { echo "  $2"; curl -fsSL -o "real/$2" "$1"; }
echo "Downloading into $(pwd)/real:"
# A single-storey house, published as both a DXF and a PDF of the same drawing
fetch https://raw.githubusercontent.com/marelaa/Architectural-plan-of-a-house/HEAD/Design.dxf house.dxf
fetch https://raw.githubusercontent.com/marelaa/Architectural-plan-of-a-house/HEAD/Design.pdf house.pdf
# A Korean apartment unit (millimetres, Korean room names, switchback stair)
fetch https://raw.githubusercontent.com/jun-c0de/floorplan_dxf/HEAD/input_raw/dxf/testdxffile2.dxf korean-apartment.dxf
# A full drawing set: plans, elevations and sections on one sheet (stress test, 4 MB)
fetch https://raw.githubusercontent.com/jun-c0de/floorplan_dxf/HEAD/input_raw/dxf/sample_plan.dxf drawing-set.dxf
echo "Done."
