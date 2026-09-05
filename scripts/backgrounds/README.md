# Project backgrounds

Each project card carries a 1024x400 image. It is not decoration: it states the
shape of one measured result from that project, with no text, no axes and no
legend. A reader who knows the case study recognises the figure; a reader who does
not sees a dark card.

One image departs from that, and says so where it is drawn. What characterises the
platform is a behaviour rather than a distribution, and the versions it has judged
so far would plot as five points.

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
python bb84.py
python credit_risk.py
python nlp_irony.py
```

Each script writes into `public/images/projects/`, resolved from its own location,
and prints the path it wrote.

## What each one draws

| Image | Figure |
|---|---|
| `research-copilot-bg.png` | Ten fused candidates entering on the left and leaving in the order the cross-encoder gives them, with one promoted from ninth to first and one demoted from second to ninth |
| `fraud-stream-bg.png` | Recall on each of the three fraud patterns, from the transaction stream alone against the same detector given features derived from resolved disputes. The middle rail is the finding: a compromised terminal spends ordinary amounts, so only the late labels reach it |
| `energy-platform-bg.png` | The partition grid, six series by 129 months, with the 582 cells that carry a request against the 192 that are empty because a series had not started. The step is where the storage the free tier allows stops paying for a decade of the per-plant grain |
| `ml-platform-bg.png` | Fifteen candidates converging on a gate. Fourteen stop short of it; the one that passes brightens and leaves along the axis the figure is mirrored about. The one figure here that is a diagram rather than a plot |
| `bb84-bg.png` | Eleven positions alternating between the two measurement bases, with a filled centre every third one, where both sides chose the same basis and the bit survives into the sifted key |
| `credit-risk-bg.png` | The distribution of predicted default probability, cut at the operating point the cost sweep chose: approved to the left of the rule, rejected to the right |
| `nlp-irony-bg.png` | The cumulative distribution of the ironic probability for each true class. The gap between the curves at a given score is the separation any threshold has to work with |
| `forecasting-bg.png` | Mean absolute error of four model families on the daily spot price, fitted with an expanding window and then over the most recent three years, on a log scale. Three lines are flat and one falls into them, which is the finding: capping the window fixed one model and moved every MASE |

The recall figures are the ones the case study reports, held in the script itself.
`fraud_stream_scores.py` and `data/fraud_stream_scores.parquet` remain for the
score distribution of a single held-out day, which an earlier draft drew and which
the evaluation still refers to.

## The three redraws

`bb84-bg.png`, `credit-risk-bg.png` and `nlp-irony-bg.png` were first made before
this directory existed, in temporary working directories that no longer hold the
code. Their scripts here are redraws: the parameters were read back off the
committed images rather than recovered, so the output differs from what they
replace in small ways.

| Image | Mean difference from the image it replaces | Pixels differing by more than 30 |
|---|---:|---:|
| `bb84-bg.png` | 6.3 of 255 | 1.0% |
| `credit-risk-bg.png` | 7.3 of 255 | 0.6% |
| `nlp-irony-bg.png` | 10.0 of 255 | 3.0% |

The last is the highest because the figure is two thin lines, where a small offset
shows in every pixel along them.

Two of the three hold numbers rather than measuring them, and say so where they are
drawn. The runs that produced those numbers are gone: for credit risk, the current
artifact's distribution over the same dataset does not reproduce the histogram, and
its closest subset correlates at 0.87.
