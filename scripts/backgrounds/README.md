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
| `fraud-stream-bg.png` | Every transaction of one held-out day against the operating point: ordinary traffic below the rule, and the day's 110 alerts above it split into 61 that resolved as fraud and 49 that did not |

The fraud figure is drawn from real scores. `fraud_stream_scores.py` regenerates
`data/fraud_stream_scores.parquet` from a checkout of Fraud-Stream-Detection with
its corpus ingested; the file is committed so the image can be redrawn without one.

## Images without a script

`bb84-bg.png`, `credit-risk-bg.png`, `forecasting-bg.png` and `nlp-irony-bg.png`
were generated before this directory existed, in temporary working directories
that no longer hold them. The images are in the repository and the code that made
them is not.

Reproducing one means writing a new script and accepting that its output will
differ from the committed image in small ways, so it is a redraw rather than a
recovery. Until that happens, this table is the record of which images can be
regenerated and which cannot.
