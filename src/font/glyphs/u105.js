import * as pathFunctions from '../pathFunctions';

let path_i = new opentype.Path();

// tittle
path_i.moveTo(165, 770);
path_i.lineTo(235, 770);
path_i.lineTo(235, 700);
path_i.lineTo(165, 700);
path_i.lineTo(165, 770);

// stem with horizontal base
path_i.moveTo(165, 500);
path_i.lineTo(215, 500);
path_i.lineTo(215, 140);
path_i.curveTo(215, 110, 225, 100, 240, 85);
path_i.lineTo(260, 65);
path_i.curveTo(270, 55, 280, 50, 290, 50);
path_i.lineTo(420, 50);
path_i.lineTo(420, 0);
path_i.lineTo(295, 0);
path_i.curveTo(265, 0, 250, 5, 235, 20);
path_i.lineTo(190, 65);
path_i.curveTo(175, 80, 165, 90, 165, 120);

export const u105 = new opentype.Glyph({
  name: 'i',
  unicode: 105,
  advanceWidth: 500,
  path: path_i
});
