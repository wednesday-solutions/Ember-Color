import Mixin from '@ember/object/mixin';
import { alias } from '@ember/object/computed';

export default Mixin.create({
  hex: alias('selectedColor.hex'),
  hsl: alias('selectedColor.hsl'),
  rgb: alias('selectedColor.rgb'),
  hsv: alias('selectedColor.hsv'),
  redValue: alias('rgb.r'),
  blueValue: alias('rgb.b'),
  greenValue: alias('rgb.g')
});
