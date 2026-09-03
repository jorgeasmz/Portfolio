"""The visual language every project background shares.

Each image is 1024x400, sits behind a card in a dark interface, and carries no
text: it states the shape of one measured result and nothing else. The palette
gives each project its own ground while keeping the two accents constant, so the
set reads as one family.
"""

from __future__ import annotations

from pathlib import Path

import matplotlib

# Set before pyplot is imported, so a script can run with no display attached.
matplotlib.use("Agg")

import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402

WIDTH, HEIGHT, DPI = 1024, 400, 100

# Green reads as the thing the project set out to catch, rose as the cost of
# catching it. They are muted because the image is a background, not a chart.
HIT = "#5fa88c"
MISS = "#b0757c"
MUTED = "#8a7f76"
RULE = "#d8cfc6"

IMAGES = Path(__file__).resolve().parents[2] / "public" / "images" / "projects"


def rgb(value: str) -> np.ndarray:
    value = value.lstrip("#")
    return np.array([int(value[index : index + 2], 16) / 255 for index in (0, 2, 4)])


def ground(dark: str, light: str, glow: str, at: tuple[float, float], strength: float) -> np.ndarray:
    """A diagonal gradient with one soft light behind the subject."""
    y, x = np.mgrid[0:HEIGHT, 0:WIDTH]
    across, down = x / (WIDTH - 1), y / (HEIGHT - 1)

    ramp = np.clip(0.6 * across + 0.4 * (1 - down), 0, 1)[..., None]
    canvas = rgb(dark) * (1 - ramp) + rgb(light) * ramp

    spread = np.exp(
        -(((across - at[0]) ** 2) / (2 * 0.35**2) + ((down - at[1]) ** 2) / (2 * 0.6**2))
    )
    return np.clip(canvas + spread[..., None] * rgb(glow) * strength, 0, 1)


def canvas(background: np.ndarray, name: str):
    """Returns the axes to draw on and the path the figure will be written to."""
    figure = plt.figure(figsize=(WIDTH / DPI, HEIGHT / DPI), dpi=DPI)
    axes = figure.add_axes((0, 0, 1, 1))
    axes.set_xlim(0, 1)
    axes.set_ylim(0, 1)
    axes.axis("off")
    axes.imshow(background, extent=(0, 1, 0, 1), aspect="auto", zorder=0, interpolation="bilinear")
    return figure, axes, IMAGES / f"{name}.png"
