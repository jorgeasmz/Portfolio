"""Forecasting Service: what capping the training window actually changed.

Mean absolute error of each family on the daily spot price, fitted with an
expanding window on the left and with the most recent three years on the right,
on a logarithmic scale because one of the four is an order of magnitude from the
others.

Three lines are flat. The seasonal naive is exactly flat, at 108.13 twice, since
its forecast reads only the observations just before the cutoff and the window
does not touch them. Prophet is the one that moved. Every MASE halved in the same
run, which is the denominator moving rather than the models.
"""

from __future__ import annotations

import numpy as np

from palette import DPI, MUTED, canvas, ground

# (family, MAE with an expanding window, MAE over 1,095 days)
FAMILIES = (
    ("sarima", 85.53, 82.06),
    ("seasonal_naive", 108.13, 108.13),
    ("prophet", 690.62, 126.30),
    ("lightgbm", 147.58, 145.12),
)
MOVED = "prophet"

LEFT, RIGHT = 0.17, 0.83
TOP, BOTTOM = 0.85, 0.17
LOW, HIGH = 1.88, 2.90  # log10 bounds, padded past the extremes

MOVED_COLOUR = "#5cb3d9"


def height(value: float) -> float:
    span = (np.log10(value) - LOW) / (HIGH - LOW)
    return BOTTOM + span * (TOP - BOTTOM)


def main() -> None:
    background = ground("#04120f", "#0a2420", "#127a5f", at=(0.34, 0.28), strength=0.30)
    figure, axes, target = canvas(background, "forecasting-bg")

    for column in (LEFT, RIGHT):
        axes.plot([column, column], [BOTTOM - 0.09, TOP + 0.09], color="#8fb8ac", lw=0.7,
                  alpha=0.18, zorder=1)

    for name, before, after in FAMILIES:
        moved = name == MOVED
        colour = MOVED_COLOUR if moved else "#84998f"
        axes.plot(
            [LEFT, RIGHT], [height(before), height(after)],
            color=colour, lw=2.4 if moved else 1.1, alpha=0.95 if moved else 0.44,
            solid_capstyle="round", zorder=4 if moved else 2,
        )
        for column, value in ((LEFT, before), (RIGHT, after)):
            axes.plot(column, height(value), "o", ms=7.0 if moved else 4.5,
                      color=colour if moved else MUTED,
                      alpha=0.95 if moved else 0.58, zorder=5)

    figure.savefig(target, dpi=DPI, facecolor="#04120f")
    print(target)


if __name__ == "__main__":
    main()
