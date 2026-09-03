"""Research Copilot: how the cross-encoder reorders what fusion ranked.

Ten candidates enter on the left in fused order and leave on the right in the
order the reranker gives them. One passage is promoted from ninth to first and
one is demoted from second to ninth, which is the movement that raises passage
accuracy from 0.43 to 0.71 on the corpus question set.
"""

from __future__ import annotations

import numpy as np

from palette import DPI, MISS, canvas, ground

CANDIDATES = 10
LEFT, RIGHT = 0.09, 0.91
TOP, BOTTOM = 0.88, 0.12

# Rank each fused candidate takes after the cross-encoder rescores it.
AFTER = [1, 8, 2, 6, 3, 9, 5, 0, 4, 7]
PROMOTED, DEMOTED = 7, 1

PROMOTED_COLOUR = "#5cb3d9"


def slot(rank: int) -> float:
    return TOP - rank * (TOP - BOTTOM) / (CANDIDATES - 1)


def main() -> None:
    background = ground("#060f1a", "#0d2033", "#1b5c7d", at=(0.26, 0.5), strength=0.34)
    figure, axes, target = canvas(background, "research-copilot-bg")

    steps = np.linspace(0, 1, 256)
    # Smoothstep, so a line leaves and arrives horizontally rather than at an angle.
    eased = steps * steps * (3 - 2 * steps)
    across = LEFT + (RIGHT - LEFT) * steps

    def curve(index: int, colour: str, width: float, alpha: float, layer: int) -> None:
        down = slot(index) + (slot(AFTER[index]) - slot(index)) * eased
        axes.plot(across, down, color=colour, lw=width, alpha=alpha, zorder=layer,
                  solid_capstyle="round")

    for index in range(CANDIDATES):
        if index not in (PROMOTED, DEMOTED):
            curve(index, "#7c8ba1", 1.0, 0.28, 2)
    curve(DEMOTED, MISS, 1.7, 0.62, 3)
    curve(PROMOTED, PROMOTED_COLOUR, 2.3, 0.95, 4)

    for index in range(CANDIDATES):
        for column, rank in ((LEFT, index), (RIGHT, AFTER[index])):
            if index == PROMOTED:
                axes.plot(column, slot(rank), "o", ms=7.0, color=PROMOTED_COLOUR, alpha=0.95, zorder=5)
            elif index == DEMOTED:
                axes.plot(column, slot(rank), "o", ms=5.5, color=MISS, alpha=0.7, zorder=5)
            else:
                axes.plot(column, slot(rank), "o", ms=4.5, color="#93a3b8", alpha=0.4, zorder=5)

    for column in (LEFT, RIGHT):
        axes.plot([column, column], [BOTTOM - 0.07, TOP + 0.07], color="#8fa3b8", lw=0.7,
                  alpha=0.16, zorder=1)

    figure.savefig(target, dpi=DPI, facecolor="#060f1a")
    print(target)


if __name__ == "__main__":
    main()
