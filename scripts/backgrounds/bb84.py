"""BB84: the two measurement bases, and where they agree.

A photon is prepared and measured in one of two bases, drawn here as the diagonal
and the rectilinear. The row alternates between them; a filled centre marks a
position where the two sides chose the same basis, which is the only case whose
bit survives into the sifted key.

The two waves are the carrier, out of phase with each other, and carry no
measurement.
"""

from __future__ import annotations

import numpy as np

from palette import DPI, HEIGHT, WIDTH, canvas, ground  # noqa: F401

SYMBOLS = 11
FIRST, STEP = 0.0977, 0.0801        # centre of the first symbol, and the pitch
AXIS = 0.5
AXIS_FROM, AXIS_TO = 0.068, 0.928

# A basis agrees with the other side every third position.
AGREES = 3

ARM = 0.0117                        # half a symbol's width, in figure units
ASPECT = WIDTH / HEIGHT             # so a diagonal arm is drawn at 45 degrees

LINE = "#8fa0e8"
BRIGHT = "#cdd6ff"
CARRIER = "#b9c4f0"


def diagonal(axes, x: float, colour: str) -> None:
    dy = ARM * ASPECT
    for sign in (1, -1):
        axes.plot([x - ARM, x + ARM], [AXIS - sign * dy, AXIS + sign * dy],
                  color=colour, lw=1.7, alpha=0.85, solid_capstyle="round", zorder=4)


def rectilinear(axes, x: float, colour: str) -> None:
    dy = ARM * ASPECT
    axes.plot([x - ARM, x + ARM], [AXIS, AXIS], color=colour, lw=1.7, alpha=0.85,
              solid_capstyle="round", zorder=4)
    axes.plot([x, x], [AXIS - dy, AXIS + dy], color=colour, lw=1.7, alpha=0.85,
              solid_capstyle="round", zorder=4)


PERIOD = 0.734


def carrier(axes, centre: float, amplitude: float, crest: float) -> None:
    """One wave, at its highest where `crest` says."""
    x = np.linspace(0, 1, 400)
    y = centre + amplitude * np.cos(2 * np.pi * (x - crest) / PERIOD)
    axes.plot(x, y, color=CARRIER, lw=0.9, alpha=0.16, zorder=1)


def main() -> None:
    background = ground("#150e30", "#100c28", "#2a1f6b", at=(0.88, 0.78), strength=0.30)
    figure, axes, target = canvas(background, "bb84-bg")

    # The upper wave is highest at the middle, the lower one a quarter of the way in.
    carrier(axes, 0.729, 0.109, crest=0.500)
    carrier(axes, 0.274, 0.111, crest=0.250)

    axes.plot([AXIS_FROM, AXIS_TO], [AXIS, AXIS], color=LINE, lw=0.8, alpha=0.35,
              zorder=2)

    for index in range(SYMBOLS):
        x = FIRST + index * STEP
        agrees = index % AGREES == 0
        colour = BRIGHT if agrees else LINE
        (diagonal if index % 2 == 0 else rectilinear)(axes, x, colour)
        if agrees:
            axes.plot(x, AXIS, "o", ms=3.2, color=BRIGHT, alpha=0.95, zorder=5)

    figure.savefig(target, dpi=DPI, facecolor="#150e30")
    print(target)


if __name__ == "__main__":
    main()
