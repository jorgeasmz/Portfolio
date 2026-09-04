"""Energy Data Platform: the partition grid, and what the warehouse can hold.

Six series across the months from 2016, one cell per partition and one request
per cell. The four upper rows are the market as a whole, one value an hour. The
two lower ones are the same hours per generating plant, fifty times the volume,
so their window starts in 2024 and the rest of the row is empty by definition.

Of the 774 cells, 582 carry a request. The step is where the free tier the
warehouse runs on stops paying for a decade of the resource grain.
"""

from __future__ import annotations

from matplotlib.patches import Rectangle

from palette import DPI, HIT, MUTED, RULE, canvas, ground

MONTHS = 129
SERIES = 6

# Month index at which each row begins: the system series at 2016-01, the
# resource ones at 2024-01, which is 96 months later.
RESOURCE_START = 96
STARTS = (0, 0, 0, 0, RESOURCE_START, RESOURCE_START)

LEFT, RIGHT = 0.05, 0.95
TOP = 0.80

PITCH = 0.108
# The two grains are separated by more than the row gap, since the step below is
# a property of the lower pair rather than of the schedule they share.
GROUP_GAP = 0.06
CELL_H = PITCH * 0.56
STEP = (RIGHT - LEFT) / MONTHS
CELL_W = STEP * 0.72


def row_centre(row: int) -> float:
    return TOP - row * PITCH - (GROUP_GAP if row >= 4 else 0.0)


def main() -> None:
    background = ground("#0a0714", "#171029", "#4b2f8c", at=(0.70, 0.62), strength=0.30)
    figure, axes, target = canvas(background, "energy-platform-bg")

    for row, start in enumerate(STARTS):
        y = row_centre(row) - CELL_H / 2
        for month in range(MONTHS):
            loaded = month >= start
            axes.add_patch(
                Rectangle(
                    (LEFT + month * STEP, y),
                    CELL_W,
                    CELL_H,
                    facecolor=HIT if loaded else MUTED,
                    alpha=0.85 if loaded else 0.15,
                    edgecolor="none",
                    zorder=3,
                )
            )

    boundary = LEFT + RESOURCE_START * STEP - STEP * 0.14
    axes.plot([boundary, boundary], [row_centre(SERIES - 1) - 0.05, TOP + 0.05], color=RULE,
              lw=0.8, alpha=0.20, zorder=2)

    figure.savefig(target, dpi=DPI, facecolor="#0a0714")
    print(target)


if __name__ == "__main__":
    main()
