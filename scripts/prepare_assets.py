"""Download the approved owner photos listed in ASSET_SOURCES.md and optimize them."""

from io import BytesIO
from pathlib import Path
import re
from urllib.request import Request, urlopen

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE = (ROOT / "ASSET_SOURCES.md").read_text(encoding="utf-8")
DEST = ROOT / "public" / "images"
DEST.mkdir(parents=True, exist_ok=True)

for name, url in re.findall(r"\| `([^`]+\.webp)` \| `(https://[^`]+)` \|", SOURCE):
    request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urlopen(request, timeout=30) as response:
        data = response.read()
    image = ImageOps.exif_transpose(Image.open(BytesIO(data))).convert("RGB")
    output = DEST / name
    image.save(output, "WEBP", quality=84, method=6)
    print(f"{name}: {image.width}x{image.height}, {output.stat().st_size:,} bytes")
