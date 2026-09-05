"""NLP irony head: how far apart the two classes' scores are.

Two cumulative distributions of the ironic probability, one per true class. The
upper curve is the non-ironic tweets, which the head sends to low scores early;
the lower one is the ironic tweets, which it spreads across the range. The gap
between them at a given score is the separation any threshold has to work with,
and the dashed rule is where the operating point cuts.

The curves are traced from the image this redraws rather than recomputed. The
served graph on the official test split produces the same two shapes but not the
same numbers, so the figure is a recovery of the picture and not of the run.
"""

from __future__ import annotations

import numpy as np

from palette import DPI, HEIGHT, WIDTH, canvas, ground

LEFT, RIGHT = 85 / WIDTH, 930 / WIDTH
BASE = 1 - 332 / HEIGHT
TOP = 1 - 58 / HEIGHT
CUT = 0.847                      # where the operating point falls, as a fraction

# (position across, cumulative fraction), read off the committed image.
NON_IRONIC = [(0.000, 0.007), (0.183, 0.434), (0.254, 0.679), (0.373, 0.810),
              (0.491, 0.945), (0.728, 0.982), (1.000, 1.000)]
IRONIC = [(0.000, 0.007), (0.254, 0.084), (0.373, 0.172), (0.491, 0.387),
          (0.609, 0.591), (0.728, 0.810), (0.846, 0.938), (1.000, 0.993)]

EARLY = "#2d877d"
LATE = "#804f59"
RULE = "#93a3a7"
AXIS = "#3d5a61"


def smooth(anchors: list[tuple[float, float]]) -> tuple[np.ndarray, np.ndarray]:
    """A curve through the anchors, rounded so the joins do not read as corners."""
    grid = np.linspace(0, 1, 600)
    raw = np.interp(grid, [a for a, _ in anchors], [b for _, b in anchors])
    window = np.hanning(61)
    window /= window.sum()
    padded = np.pad(raw, 30, mode="edge")
    return grid, np.convolve(padded, window, mode="valid")


def draw(axes, anchors: list[tuple[float, float]], colour: str) -> None:
    across, fraction = smooth(anchors)
    axes.plot(
        LEFT + (RIGHT - LEFT) * across,
        BASE + (TOP - BASE) * fraction,
        color=colour, lw=2.4, alpha=0.95, solid_capstyle="round", zorder=3,
    )


def main() -> None:
    background = ground("#0d2b31", "#0a1820", "#12525c", at=(0.22, 0.88), strength=0.20)
    figure, axes, target = canvas(background, "nlp-irony-bg")

    axes.plot([LEFT, RIGHT], [BASE, BASE], color=AXIS, lw=1.0, alpha=0.75, zorder=2)
    axes.plot([LEFT, RIGHT], [BASE + (TOP - BASE) * CUT] * 2, color=RULE, lw=1.6,
              alpha=0.90, linestyle=(0, (6, 5)), zorder=4)

    draw(axes, IRONIC, LATE)
    draw(axes, NON_IRONIC, EARLY)

    figure.savefig(target, dpi=DPI, facecolor="#0d2b31")
    print(target)


if __name__ == "__main__":
    main()
