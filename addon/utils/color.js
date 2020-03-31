import tinycolor from 'tinycolor';
import { isNone } from '@ember/utils';

export function isValidHex(hex) {
  if (isNone(hex)) {
    return false;
  }
  const lh = (String(hex).charAt(0) === '#') ? 1 : 0;
  return hex.length !== (4 + lh) && hex.length < (7 + lh) && tinycolor(hex).isValid();
}

export function convertRBGToColor(r, g, b) {
  let rgb = {
    a: 1,
    r,
    b,
    g
  };
  return convertColor(rgb);
}

export function convertColor(data, oldHue) {
  const color = data.hex ? tinycolor(data.hex) : tinycolor(data);
  const hsl = color.toHsl();
  const hsv = color.toHsv();
  const rgb = color.toRgb();
  const hex = color.toHex();
  if (hsl.s === 0) {
    hsl.h = oldHue || 0;
    hsv.h = oldHue || 0;
  }
  const transparent = hex === '000000' && rgb.a === 0;

  return {
    hsl,
    hex: transparent ? 'transparent' : `#${ hex }`,
    rgb,
    hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source
  }
}
