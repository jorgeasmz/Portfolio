"""Fraud Stream Detection: which fraud pattern each set of features can see.

Three rails, one per pattern the simulator injects. The upper fill is the recall
the detector reaches from the transaction stream alone, the lower one what it
reaches once features derived from resolved disputes are added. The middle rail is
the finding: a compromised terminal spends ordinary amounts, so nothing in the
stream distinguishes it, and only labels that arrive a week late reach it.

Recall at a budget of 100 alerts a day, measured on 813,843 held-out transactions.
"""

from __future__ import annotations

from palette import DPI, HIT, MUTED, canvas, ground

# (pattern, recall without label-derived features, recall with them)
PATTERNS = (
    ("amount", 0.982, 0.916),
    ("terminal", 0.007, 0.664),
    ("card", 0.878, 0.819),
)

LEFT, RIGHT = 0.09, 0.91
BAR = 0.040
GAP = 0.034
CENTRES = (0.76, 0.50, 0.24)


def rail(axes, centre: float, offset: float, fraction: float, colour: str, alpha: float) -> None:
    y = centre + offset
    axes.plot([LEFT, RIGHT], [y, y], color="#c9bdb2", lw=BAR * 200, alpha=0.07,
              solid_capstyle="round", zorder=2)
    axes.plot([LEFT, LEFT + (RIGHT - LEFT) * fraction], [y, y], color=colour, lw=BAR * 200,
              alpha=alpha, solid_capstyle="round", zorder=3)


def main() -> None:
    background = ground("#0d0805", "#1e1109", "#7a3d12", at=(0.72, 0.30), strength=0.17)
    figure, axes, target = canvas(background, "fraud-stream-bg")

    for centre, (_, without, with_labels) in zip(CENTRES, PATTERNS, strict=True):
        rail(axes, centre, (BAR + GAP) / 2, without, MUTED, 0.55)
        rail(axes, centre, -(BAR + GAP) / 2, with_labels, HIT, 0.80)

    figure.savefig(target, dpi=DPI, facecolor="#0d0805")
    print(target)


if __name__ == "__main__":
    main()
