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
```

Each script writes into `public/images/projects/`, resolved from its own location,
and prints the path it wrote.

## What each one draws

| Image | Figure |
|---|---|
| `research-copilot-bg.png` | Ten fused candidates entering on the left and leaving in the order the cross-encoder gives them, with one promoted from ninth to first and one demoted from second to ninth |
| `fraud-stream-bg.png` | Recall on each of the three fraud patterns, from the transaction stream alone against the same detector given features derived from resolved disputes. The middle rail is the finding: a compromised terminal spends ordinary amounts, so only the late labels reach it |

The recall figures are the ones the case study reports, held in the script itself.
`fraud_stream_scores.py` and `data/fraud_stream_scores.parquet` remain for the
score distribution of a single held-out day, which an earlier draft drew and which
the evaluation still refers to.

## Images without a script

`bb84-bg.png`, `credit-risk-bg.png`, `forecasting-bg.png` and `nlp-irony-bg.png`
were generated before this directory existed, in temporary working directories
that no longer hold them. The images are in the repository and the code that made
them is not.

Reproducing one means writing a new script and accepting that its output will
differ from the committed image in small ways, so it is a redraw rather than a
recovery. Until that happens, this table is the record of which images can be
regenerated and which cannot.
