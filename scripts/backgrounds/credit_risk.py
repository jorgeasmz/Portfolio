"""Credit Risk: the distribution of scores, cut at the operating point.

One histogram of predicted default probability, coloured by the side of the
decision threshold each bar falls on: approved to the left, rejected to the right.
The threshold is the one the cost sweep chose rather than the 0.5 default, which
is why the cut sits left of the mode's tail rather than in the middle.

The heights are read off the image this redraws, not recomputed. The run that
produced them is gone, and the current artifact's distribution over this dataset
does not reproduce them: the closest subset, the applicants who did not default,
correlates at 0.87. Holding the numbers here and saying so is the honest form of a
redraw.
"""

from __future__ import annotations

import numpy as np
from matplotlib.patches import Rectangle

from palette import DPI, HEIGHT, WIDTH, canvas, ground

# Bar heights as a fraction of the tallest, measured off the committed image.
HEIGHTS = [0.471, 0.764, 0.977, 1.000, 0.810, 0.534, 0.293, 0.155, 0.109,
           0.115, 0.149, 0.184, 0.207, 0.218, 0.213, 0.190, 0.155, 0.121,
           0.080, 0.052, 0.029, 0.017]
APPROVED = 9                      # bars left of the threshold

FIRST, PITCH = 111 / WIDTH, 38.2 / WIDTH
BAR = 27 / WIDTH
BASE = 1 - 318 / HEIGHT
TALLEST = 174 / HEIGHT            # the tallest bar, in figure units
CUT = 444 / WIDTH

# This image predates the shared accents and keeps the teal and rose it was drawn
# with; recolouring it would change the thing being recovered.
LEFT = "#1a504b"
RIGHT = "#4c3338"
RULE = "#dfe8ea"
CARRIER = "#a8ccd0"


def main() -> None:
    background = ground("#0d2b31", "#0a1820", "#12525c", at=(0.22, 0.88), strength=0.20)
    figure, axes, target = canvas(background, "credit-risk-bg")

    x = np.linspace(0, 1, 400)
    # Centre, amplitude, crest and period read off the image this redraws.
    wave = 1 - (91 - 25 * np.cos(2 * np.pi * (x - 0.598) / 0.797)) / HEIGHT
    axes.plot(x, wave, color=CARRIER, lw=0.9, alpha=0.22, zorder=1)

    axes.plot([80 / WIDTH, 940 / WIDTH], [BASE, BASE], color=RULE, lw=0.9,
              alpha=0.35, zorder=2)

    for index, height in enumerate(HEIGHTS):
        centre = FIRST + index * PITCH
        axes.add_patch(Rectangle(
            (centre - BAR / 2, BASE), BAR, height * TALLEST,
            facecolor=LEFT if index < APPROVED else RIGHT,
            edgecolor="none", zorder=3,
        ))

    axes.plot([CUT, CUT], [BASE, BASE + 0.56], color=RULE, lw=1.4, alpha=0.85,
              linestyle=(0, (5, 4)), zorder=4)

    figure.savefig(target, dpi=DPI, facecolor="#0d2b31")
    print(target)


if __name__ == "__main__":
    main()
