"""ML Platform: what the drift monitor says on data whose shift is known.

Twenty columns of credit applications, ordered by how far they moved. The upper
row is the held-out split, drawn from the same population the model was fitted
on; the lower row is the top quartile of loan amount. The rule is 0.25, the
conventional threshold above which a population stability index counts as a
significant shift.

Nothing crosses the rule above. Three columns cross it below, and the first of
them is the one that was filtered. The measure is logarithmic because the largest
index is 5.93 and the smallest is zero.
"""

from __future__ import annotations

import numpy as np

from palette import DPI, HIT, MUTED, RULE, canvas, ground

# Population stability index per column, ordered by the shifted case.
SAME = [0.0405, 0.0064, 0.0725, 0.0727, 0.0109, 0.0009, 0.0144, 0.0477, 0.0138,
        0.0138, 0.0263, 0.0002, 0.0159, 0.0005, 0.0370, 0.0005, 0.0021, 0.0023,
        0.0033, 0.0000]
SHIFTED = [5.9349, 1.6781, 0.8768, 0.4970, 0.2691, 0.2678, 0.1667, 0.1640, 0.1383,
           0.1217, 0.0884, 0.0789, 0.0723, 0.0523, 0.0325, 0.0324, 0.0284, 0.0128,
           0.0122, 0.0000]

SIGNIFICANT = 0.25
FLOOR = 0.0008           # below this a bar would have no height to draw
CEILING = 8.0

LEFT, RIGHT = 0.06, 0.94
BASE_TOP, BASE_BOTTOM = 0.55, 0.06     # the two rows sit on these baselines
HEIGHT = 0.36


def scaled(value: float) -> float:
    """Log height, since the indices span four orders of magnitude."""
    value = max(value, FLOOR)
    span = np.log10(CEILING / FLOOR)
    return float(np.log10(value / FLOOR) / span)


def row(axes, baseline: float, values: list[float], colour_above: str) -> None:
    step = (RIGHT - LEFT) / len(values)
    width = step * 0.62
    for index, value in enumerate(values):
        x = LEFT + index * step + (step - width) / 2
        height = scaled(value) * HEIGHT
        crossed = value >= SIGNIFICANT
        axes.add_patch(plt_rect(
            (x, baseline), width, height,
            colour_above if crossed else MUTED,
            0.92 if crossed else 0.40,
        ))
    rule = baseline + scaled(SIGNIFICANT) * HEIGHT
    axes.plot([LEFT - 0.02, RIGHT + 0.02], [rule, rule], color=RULE, lw=0.9,
              alpha=0.30, zorder=4)


def plt_rect(xy, width, height, colour, alpha):
    from matplotlib.patches import Rectangle

    return Rectangle(xy, width, height, facecolor=colour, alpha=alpha,
                     edgecolor="none", zorder=3)


def main() -> None:
    background = ground("#120610", "#25101f", "#7d1f52", at=(0.24, 0.34), strength=0.28)
    figure, axes, target = canvas(background, "ml-platform-bg")

    row(axes, BASE_TOP, SAME, HIT)
    row(axes, BASE_BOTTOM, SHIFTED, HIT)

    figure.savefig(target, dpi=DPI, facecolor="#120610")
    print(target)


if __name__ == "__main__":
    main()
