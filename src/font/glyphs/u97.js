import pathFunctions from '../pathFunctions';

let path_a = new opentype.Path();
path_a.moveTo(130, 0);
path_a.lineTo(272, 0);
pathFunctions.largeHorizontalCurveLowerRightCW(path_a, 272, 0);
path_a.lineTo(387, 70);
path_a.lineTo(462, 0);
path_a.lineTo(496, 34);
path_a.lineTo(440, 90);
pathFunctions.smallVerticalCurveLowerLeftCCW(path_a, 440, 90);
path_a.lineTo(430, 387);
pathFunctions.largeVerticalCurveUpperRightCCW(path_a, 430, 387);
path_a.lineTo(377, 480);
pathFunctions.largeHorizontalCurveUpperRightCCW(path_a, 377, 480);
path_a.lineTo(130, 500);
pathFunctions.largeHorizontalCurveUpperLeftCCW(path_a, 130, 500);
path_a.lineTo(20, 430);
path_a.lineTo(55, 395);
path_a.lineTo(100, 440);
pathFunctions.smallHorizontalCurveUpperLeftCW(path_a, 100, 440);
path_a.lineTo(332, 450);
pathFunctions.smallHorizontalCurveUpperRightCW(path_a, 332, 450);
path_a.lineTo(370, 422);
pathFunctions.smallVerticalCurveUpperRightCW(path_a, 370, 422);
path_a.lineTo(380, 305);
path_a.lineTo(130, 305);
// pathFunctions.largeHorizontalCurveUpperLeftCCW(path_a, 130, 305);
// pathFunctions.smallHorizontalCurveUpperLeftReverse(path_a, 130, 305);
// path_a.lineTo(20, 235);
// pathFunctions.largeVerticalCurveUpperLeftCCW(path_a, 20, 235);
// path_a.lineTo(0, 130);

export const u97 = new opentype.Glyph({
  name: 'a',
  unicode: 97,
  advanceWidth: 500,
  path: path_a
});
