function largeHorizontalCurveUpperLeftCCW (path, x, y) {
  path.curveTo(x - 30, y, x - 45, y - 5, x - 60, y - 20);
}

function largeHorizontalCurveLowerLeftCW (path, x, y) {
  path.curveTo(x + 15, y - 15, x + 30, y - 20, x + 60, y - 20);
}

function largeHorizontalCurveLowerRightCW (path, x, y) {
  path.curveTo(x + 30, y, x + 45, y + 5, x + 60, y + 20);
}

function largeVerticalCurveUpperLeftCCW(path, x , y) {
  path.curveTo(x - 15, y - 15, x - 20, y - 30, x - 20, y - 60);
}

function largeVerticalCurveLowerLeftCW (path, x , y) {
  path.curveTo(x, y - 30, x + 5, y - 45, x + 20, y - 60);
}

function largeVerticalCurveLowerRightCW (path, x , y) {
  path.curveTo(x + 15, y + 15, x + 20, y + 30, x + 20, y + 60);
}

function largeVerticalCurveUpperRightCCW (path, x , y) {
  path.curveTo(x, y + 30, x - 5, y + 45, x - 20, y + 60);
}

function largeHorizontalCurveUpperRightCCW (path, x, y) {
  path.curveTo(x - 15, y + 15, x - 30, y + 20, x - 60, y + 20);
}

function smallHorizontalCurveUpperRightCW (path, x , y) {
  path.curveTo(x + 10, y, x + 15, y - 5, x + 20, y - 10);
}

function smallVerticalCurveUpperRightCW (path, x , y) {
  path.curveTo(x + 5, y - 5, x + 10, y - 10, x + 10, y - 20);
}

function smallVerticalCurveUpperLeftCW (path, x , y) {
  path.curveTo(x, y + 10, x + 5, y + 15, x + 10, y + 20);
}

function smallVerticalCurveLowerRightCCW (path, x, y) {
  path.curveTo(x, y - 10, x - 5, y - 15, x - 10, y - 20);
}

function smallVerticalCurveLowerLeftCCW (path, x , y) {
  path.curveTo(x - 5, y + 5, x - 10, y + 10, x - 10, y + 20);
}

function smallHorizontalCurveLowerLeftCCW (path, x , y) {
  path.curveTo(x - 10, y, x - 15, y + 5, x - 20, y + 10);
}

function smallHorizontalCurveUpperLeftCW (path, x , y) {
  path.curveTo(x + 5, y + 5, x + 10, y + 10, x + 20, y + 10);
}

function smallHorizontalCurveLowerRightCCW (path, x , y) {
  path.curveTo(x - 5, y - 5, x - 10, y - 10, x - 20, y - 10);
}

export default {
  largeHorizontalCurveUpperLeftCCW,
  largeHorizontalCurveLowerLeftCW,
  largeHorizontalCurveLowerRightCW,
  largeVerticalCurveUpperLeftCCW,
  largeVerticalCurveLowerLeftCW,
  largeHorizontalCurveUpperRightCCW,
  largeVerticalCurveLowerRightCW,
  largeVerticalCurveUpperRightCCW,
  largeHorizontalCurveUpperRightCCW,
  smallHorizontalCurveUpperRightCW,
  smallVerticalCurveUpperRightCW,
  smallVerticalCurveUpperLeftCW,
  smallVerticalCurveLowerRightCCW,
  smallVerticalCurveLowerLeftCCW,
  smallHorizontalCurveLowerLeftCCW,
  smallHorizontalCurveUpperLeftCW,
  smallHorizontalCurveLowerRightCCW
};