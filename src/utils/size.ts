import { Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('screen');
const percentageCalculation = (max: number, val: number) => max * (val / 100);

const fontCalculation = (h: number, w: number, val: number) => {
  const widthDimension = height > w ? w : h;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)),
    val
  );
};
export const rh = (h: number) => percentageCalculation(height, h);
export const rw = (w: number) => percentageCalculation(width, w);
export const rf = (f: number) => fontCalculation(height, width, f);
