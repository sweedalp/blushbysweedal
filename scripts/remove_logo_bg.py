from PIL import Image
import os

src = r"C:\Users\HP\.cursor\projects\C-Users-HP-AppData-Local-Temp-dd6cd864-1097-4f1d-ad19-b8f4ac40c544\assets\bbs-mirror-clean.jpg"
if not os.path.exists(src):
    raise SystemExit("clean mirror source missing")

img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

# Pure white / near-white knockout for transparent logo
out = Image.new("RGBA", (w, h))
out_px = out.load()

for y in range(h):
    for x in range(w):
        r, g, b, _a = pixels[x, y]
        brightness = (r + g + b) / 3
        chroma = max(r, g, b) - min(r, g, b)

        if brightness >= 245 and chroma < 18:
            alpha = 0
        elif brightness >= 235 and chroma < 22:
            alpha = int((245 - brightness) / 10 * 255)
        elif brightness >= 225 and chroma < 16:
            alpha = int((235 - brightness) / 10 * 200)
        else:
            alpha = 255

        out_px[x, y] = (r, g, b, max(0, min(255, alpha)))

bbox = out.getbbox()
if bbox:
    pad = 12
    left, top, right, bottom = bbox
    out = out.crop(
        (
            max(0, left - pad),
            max(0, top - pad),
            min(w, right + pad),
            min(h, bottom + pad),
        )
    )

# Keep a copy of the source too
Image.open(src).save(r"D:\blushbysweedal\site\public\media\logo-mirror-clean-source.jpg")

dests = [
    r"D:\blushbysweedal\site\public\logo-mark.png",
    r"D:\blushbysweedal\site\public\favicon.png",
    r"D:\blushbysweedal\site\public\apple-touch-icon.png",
]
for dest in dests:
    out.save(dest, "PNG")
    print("saved", dest, out.size)
