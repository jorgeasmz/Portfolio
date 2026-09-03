"""Rebuilds the scores `fraud_stream.py` draws, from the project that produced them.

Run from a checkout of Fraud-Stream-Detection with its corpus ingested:

    PYTHONPATH=. python .../fraud_stream_scores.py --out .../data/fraud_stream_scores.parquet

The file is committed so the background can be redrawn without that checkout. This
script is what says where those numbers came from.
"""

from __future__ import annotations

import argparse
from pathlib import Path

import pandas as pd

DAY = "2018-07-20"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--out", type=Path, required=True)
    parser.add_argument("--day", default=DAY)
    args = parser.parse_args()

    from detect.detectors import GradientBoostingDetector
    from detect.train import SERVED_COLUMNS
    from features.offline import build_features, split_periods
    from features.risk import build_risk_features
    from ingest.config import TEST_START, TRAIN_END
    from ingest.prepare import load_table

    table = load_table()
    features = pd.concat([build_features(table), build_risk_features(table)], axis=1)
    is_train, is_test = split_periods(table, TRAIN_END, TEST_START)

    detector = GradientBoostingDetector(columns=SERVED_COLUMNS)
    detector.fit(features[is_train], table.loc[is_train, "is_fraud"].to_numpy())

    scored = table.loc[is_test, ["tx_datetime", "is_fraud"]].assign(
        score=detector.score(features[is_test])
    )
    day = scored[scored.tx_datetime.dt.date == pd.Timestamp(args.day).date()]

    pd.DataFrame(
        {
            "t": (day.tx_datetime - day.tx_datetime.min()).dt.total_seconds().to_numpy(),
            "score": day.score.to_numpy(),
            "fraud": day.is_fraud.to_numpy(),
        }
    ).to_parquet(args.out, index=False)
    print(f"{len(day)} transactions written to {args.out}")


if __name__ == "__main__":
    main()
