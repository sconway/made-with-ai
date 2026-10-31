# Floor plan import test files

Files for testing **Import** in the floor plan editor (DXF and PDF). Drop one on the canvas or use the Import button, check the layer review, then import.

## Where to start

1. `synthetic/01-simple-apartment.pdf`. A clean plan with a known answer. If this one is off, check your setup first: is the API server restarted, and are you signed in?
2. `real/house.pdf`, then `real/house.dxf`. The same real house drawn by an architect, so both should give the same result.
3. `synthetic/03-single-line-style.pdf`. The hardest PDF case: everything is drawn in one identical thin line.
4. The rest, as needed.

## Synthetic plans (`synthetic/`)

Each one is the same 30 × 20 ft apartment (living room, bedroom, bath; 6″ outer and 4½″ inner walls; 3 doors; 2 windows) drawn a different way. **Expected: 10 walls, 3 doors, 2 windows and 3 named rooms (Living Room, Bedroom, Bath), 30 × 20 ft.**

| File | What it tests | Expected beyond the basics |
|---|---|---|
| `01-simple-apartment.pdf` / `.dxf` | The baseline. Walls are heavier lines than everything else; the DXF has named layers and a bed block. | The DXF also places a queen bed. |
| `02-stairs-drawn-like-walls.pdf` | A staircase drawn in the same heavy line as the walls. | 1 staircase, and no extra walls. |
| `03-single-line-style.pdf` | Walls, doors, windows, stairs, furniture and dimensions all in one line style. Needs the AI review, which labels each object. | 1 staircase; sofa, coffee table, bed, toilet and tub kept as drawn; dimension lines hidden. |
| `04-rotated-30-degrees.pdf` / `.dxf` | A plan that isn't square to the page. | Size reads about 36 × 32 ft because the plan's bounding box is rotated. |
| `05-no-dimensions-no-scale.pdf` | No dimension labels and no scale note. Scale has to come from door sizes. | Same counts; the size may be a little off. |
| `06-dxf-without-units.dxf` | A DXF that doesn't declare its units. | Same counts, still 30 × 20 ft. |

To recreate them: `node test-fixtures/floor-plans/generate.mjs`

## Real drawings (`real/`, not in git)

These come from public GitHub projects with no stated license, so they're kept out of the repository. Fetch them with `./test-fixtures/floor-plans/download-real.sh`.

| File | What it is | Expected (with the AI review) |
|---|---|---|
| `house.pdf` / `house.dxf` | A one-storey house drawn in AutoCAD, as a PDF and a DXF. The PDF uses colored line styles and filled walls; the DXF has blocks with French names. | 19 walls, 6 doors (the front door is a double door), 7 windows, 6 rooms, 50.8 × 31.8 ft. The DXF also places 14 pieces of furniture. Walls are 10″ outside and 6″ inside. |
| `korean-apartment.dxf` | An apartment unit in millimetres, with Korean room names and a switchback stair. It's a partial drawing with no doors. | About 50 walls, 6–7 windows, 2 stair flights, 10 room names (e.g. 화장실-1, 서재, Master bedroom). Notes, level marks and tags are hidden. |
| `drawing-set.dxf` | A full sheet: several floor plans, elevations and sections. A stress test (4 MB). | Imports only the largest drawing and says how many it skipped. Expect a rougher result. |

## Checking after code changes

`node test-fixtures/floor-plans/check.mjs` (Node 22+) runs every file through the importer **without** the AI review and prints the counts two ways: the plain pass, and the layer review accepted as suggested (the `rv` columns, which is what you get when the AI review is unavailable). The synthetic plans should all show 10 walls, 3 doors and 2 windows both ways; the real files should match the table above, give or take what the AI review adds.

To check a plan of your own too, pass its path: `node test-fixtures/floor-plans/check.mjs ~/Downloads/plan.pdf`.
