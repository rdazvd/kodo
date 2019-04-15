import * as pathFunctions from '../pathFunctions';

let path_o = new opentype.Path();

// outer form
path_o.moveTo(305, 500);
path_o.lineTo(130, 500);
pathFunctions.largeHorizontalCurveUpperLeftCCW(path_o, 130, 500);
path_o.lineTo(20, 430);
pathFunctions.largeVerticalCurveUpperLeftCCW(path_o, 20, 430);
path_o.lineTo(0, 130);
pathFunctions.largeVerticalCurveLowerLeftCW(path_o, 0, 130);
path_o.lineTo(70, 20);
pathFunctions.largeHorizontalCurveLowerLeftCW(path_o, 70, 20);
path_o.lineTo(305, 0);
pathFunctions.largeHorizontalCurveLowerRightCW(path_o, 305, 0);
path_o.lineTo(415, 70);
pathFunctions.largeVerticalCurveLowerRightCW(path_o, 415, 70);
path_o.lineTo(435, 370);
pathFunctions.largeVerticalCurveUpperRightCCW(path_o, 435, 370);
path_o.lineTo(365, 480);
pathFunctions.largeHorizontalCurveUpperRightCCW(path_o, 365, 480);

// counter form
path_o.moveTo(315, 450);
pathFunctions.smallHorizontalCurveUpperRightCW(path_o, 315, 450);
path_o.lineTo(375, 400);
pathFunctions.smallVerticalCurveUpperRightCW(path_o, 375, 400);
path_o.lineTo(385, 120);
pathFunctions.smallVerticalCurveLowerRightCCW(path_o, 385, 120);
path_o.lineTo(335, 60);
pathFunctions.smallHorizontalCurveLowerRightCCW(path_o, 335, 60);
path_o.lineTo(120, 50);
pathFunctions.smallHorizontalCurveLowerLeftCCW(path_o, 120, 50);
path_o.lineTo(60, 100);
pathFunctions.smallVerticalCurveLowerLeftCCW(path_o, 60, 100);
path_o.lineTo(50, 380);
pathFunctions.smallVerticalCurveUpperLeftCW(path_o, 50, 380);
path_o.lineTo(100, 440);
pathFunctions.smallHorizontalCurveUpperLeftCW(path_o, 100, 440);
path_o.lineTo(315, 450);

export const u111 = new opentype.Glyph({
  name: 'o',
  unicode: 111,
  advanceWidth: 500,
  path: path_o
});
