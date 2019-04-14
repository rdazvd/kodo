import { allGlyphDescriptions } from './glyphs/_glyphIndex';

export const font = new opentype.Font({
  familyName: 'Kodo',
  styleName: 'Medium',
  unitsPerEm: 1000,
  ascender: 800,
  descender: -200,
  glyphs: allGlyphDescriptions
});
