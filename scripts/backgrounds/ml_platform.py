"""ML Platform: candidates arriving at a gate, and the one that passes it.

Every other image in this set states a measured result. This one does not, and the
reason is that what characterises this project is a behaviour rather than a
distribution: a candidate is compared against the version in production and is
refused unless it improves on it, so almost everything stops and one thing
continues. A plot of the versions registered so far would be a figure of five
points; the shape of the rule is the more honest subject.

Fifteen paths converge on the gate. Fourteen end there. The one that passes leaves
along the axis the whole figure is mirrored about.
"""

from __future__ import annotations

import numpy as np

from palette import DPI, HIT, canvas, ground

PATHS = 15                    # odd, so one of them is the axis
ENTRY, GATE, EXIT = 0.05, 0.63, 0.95
SPREAD = 0.42                 # half the height the paths enter across
THROAT = 0.10                 # half the height they converge into
STOP = 0.035                  # gap a refused path leaves before the gate
MIDDLE = 0.5

REFUSED = "#9c8494"
PASSED = HIT


def main() -> None:
    background = ground("#120610", "#25101f", "#7d1f52", at=(0.62, 0.5), strength=0.30)
    figure, axes, target = canvas(background, "ml-platform-bg")

    steps = np.linspace(0, 1, 240)
    # Smoothstep, so a path leaves and arrives horizontally rather than at an angle.
    eased = steps * steps * (3 - 2 * steps)

    for offset in np.linspace(-1, 1, PATHS):
        centre = abs(offset) < 1e-9
        # A refused path stops short of the gate. The one that passes reaches it.
        finish = GATE if centre else GATE - STOP
        across = ENTRY + (finish - ENTRY) * steps
        start = MIDDLE + offset * SPREAD
        down = start + (MIDDLE + offset * THROAT - start) * eased

        axes.plot(
            across, down,
            color=PASSED if centre else REFUSED,
            lw=2.2 if centre else 1.0,
            # The candidate arrives no brighter than the others; what it earns is
            # the far side.
            alpha=0.55 if centre else 0.28,
            solid_capstyle="round",
            zorder=4 if centre else 2,
        )

    # The gate itself: the one place every path has to reach the same conclusion.
    axes.plot([GATE, GATE], [MIDDLE - THROAT - 0.16, MIDDLE + THROAT + 0.16],
              color="#efe2ea", lw=1.3, alpha=0.42, zorder=5)

    # What passes it continues, and nothing else does.
    axes.plot([GATE, EXIT], [MIDDLE, MIDDLE], color=PASSED, lw=2.6, alpha=0.95,
              solid_capstyle="round", zorder=6)
    axes.plot(EXIT, MIDDLE, "o", ms=7.0, color=PASSED, alpha=0.95, zorder=7)

    figure.savefig(target, dpi=DPI, facecolor="#120610")
    print(target)


if __name__ == "__main__":
    main()
