# Project backgrounds

Each project card carries a 1024x400 image. It is not decoration: it states the
shape of one measured result from that project, with no text, no axes and no
legend. A reader who knows the case study recognises the figure; a reader who does
not sees a dark card.

The set shares a visual language, which `palette.py` holds: one diagonal gradient
with a soft light behind the subject, a ground colour per project, and two accents
that never change. Green is what the project set out to catch and rose is the cost
of catching it.

```bash
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt

python research_copilot.py
python fraud_stream.py
python energy_platform.py
python forecasting_dash.py
python ml_platform.py
```

Each script writes into `public/images/projects/`, resolved from its own location,
and prints the path it wrote.

## What each one draws

| Image | Figure |
|---|---|
| `research-copilot-bg.png` | Ten fused candidates entering on the left and leaving in the order the cross-encoder gives them, with one promoted from ninth to first and one demoted from second to ninth |
| `fraud-stream-bg.png` | Recall on each of the three fraud patterns, from the transaction stream alone against the same detector given features derived from resolved disputes. The middle rail is the finding: a compromised terminal spends ordinary amounts, so only the late labels reach it |
| `energy-platform-bg.png` | The partition grid, six series by 129 months, with the 582 cells that carry a request against the 192 that are empty because a series had not started. The step is where the storage the free tier allows stops paying for a decade of the per-plant grain |
| `ml-platform-bg.png` | Twenty columns of credit applications ordered by how far they moved, over the held-out split and over the top quartile of loan amount, on a log scale with the 0.25 rule drawn. Nothing crosses it above; six columns cross it below, and the first is the one that was filtered |
| `forecasting-bg.png` | Mean absolute error of four model families on the daily spot price, fitted with an expanding window and then over the most recent three years, on a log scale. Three lines are flat and one falls into them, which is the finding: capping the window fixed one model and moved every MASE |

The recall figures are the ones the case study reports, held in the script itself.
`fraud_stream_scores.py` and `data/fraud_stream_scores.parquet` remain for the
score distribution of a single held-out day, which an earlier draft drew and which
the evaluation still refers to.

## Images without a script

`bb84-bg.png`, `credit-risk-bg.png` and `nlp-irony-bg.png` were generated before
this directory existed, in temporary working directories that no longer hold
them. The images are in the repository and the code that made them is not.

Reproducing one means writing a new script and accepting that its output will
differ from the committed image in small ways, so it is a redraw rather than a
recovery. Until that happens, this table is the record of which images can be
regenerated and which cannot.
