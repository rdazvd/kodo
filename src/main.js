import { font } from './font/fontDescription';

const buffer = font.toArrayBuffer();
const parsedFont = opentype.parse(buffer);

function createGlyphCanvas(glyph, size) {
  let canvasId, html, glyphsDiv, wrap, canvas, ctx;
  canvasId = 'c' + glyph.index;
  html = '<div class="wrapper" style="width:' + size + 'px"><canvas id="' + canvasId + '" width="' + size + '" height="' + size + '"></canvas><span>' + glyph.index + '</span></div>';
  glyphsDiv = document.getElementById('glyphs');
  wrap = document.createElement('div');
  wrap.innerHTML = html;
  glyphsDiv.appendChild(wrap);
  canvas = document.getElementById(canvasId);
  ctx = canvas.getContext('2d');
  return ctx;
}

for (let i = 1; i < parsedFont.glyphs.length; i++) {
    let glyph = parsedFont.glyphs.get(i);
    let ctx = createGlyphCanvas(glyph, 500);
    let x = 50;
    let y = 400;
    let fontSize = 500;
    glyph.draw(ctx, x, y, fontSize);
    glyph.drawPoints(ctx, x, y, fontSize);
    glyph.drawMetrics(ctx, x, y, fontSize);
};
