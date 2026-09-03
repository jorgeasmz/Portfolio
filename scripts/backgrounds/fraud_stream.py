"""Fraud Stream Detection: one held-out day against the operating point.

Every transaction of 2018-07-20 scored by the served detector. The dashed rule is
the threshold written by training, the band below it is ordinary traffic, and the
points above it are the day's alerts, split by whether the dispute resolved as
fraud. The scores are real: `fraud_stream_scores.py` writes the file this reads.
"""

from __future__ import annotations

from pathlib import Path

import pandas as pd

from palette import DPI, HIT, MISS, MUTED, RULE, canvas, ground

SCORES = Path(__file__).resolve().parent / "data" / "fraud_stream_scores.parquet"

# The operating point recorded in the artifact the deployment serves.
THRESHOLD = 0.01643005512716834

# The score distribution has its mass against zero, and a fourth root spreads it
# enough that the threshold sits inside the frame rather than on its floor.
def height(score):
    return 0.10 + 0.80 * (score**0.25)


def main() -> None:
    day = pd.read_parquet(SCORES)
    background = ground("#0d0805", "#1e1109", "#7a3d12", at=(0.72, 0.30), strength=0.17)
    figure, axes, target = canvas(background, "fraud-stream-bg")

    across = 0.05 + 0.90 * (day.t.to_numpy() / day.t.max())
    down = height(day.score.to_numpy())
    rule = height(THRESHOLD)

    alerted = day.score.to_numpy() >= THRESHOLD
    fraud = day.fraud.to_numpy() == 1

    axes.scatter(across[~alerted], down[~alerted], s=3.0, c=MUTED, alpha=0.16, linewidths=0,
                 zorder=2)
    axes.plot([0.02, 0.98], [rule, rule], color=RULE, lw=1.1, alpha=0.5, ls=(0, (7, 5)), zorder=3)
    axes.scatter(across[alerted & ~fraud], down[alerted & ~fraud], s=17, c=MISS, alpha=0.75,
                 linewidths=0, zorder=4)
    axes.scatter(across[alerted & fraud], down[alerted & fraud], s=19, c=HIT, alpha=0.92,
                 linewidths=0, zorder=5)

    figure.savefig(target, dpi=DPI, facecolor="#0d0805")
    print(f"{target}  {int(alerted.sum())} alerts, {int((alerted & fraud).sum())} fraudulent")


if __name__ == "__main__":
    main()
