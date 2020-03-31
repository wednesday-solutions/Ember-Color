import Component from '@ember/component';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { isValidHex, convertColor } from '../utils/color';
import ColorPropertyBinding from '../mixins/color-property-binding';
import layout from '../templates/components/sketch-fields';

export default Component.extend(ColorPropertyBinding, {
  layout,
  onChange: null,
  selectedColor: null,
  disableAlpha: false,

  alphaDisplayValue: computed('rgb.a', function() {
    return Math.round(this.rgb.a * 100);
  }),

  onHandleChangeRGB(data) {
    let { onChange } = this;
    if (isPresent(onChange)) {
      onChange(convertColor(data));
    }
  },
  actions: {
    onHandleChangeHex(data) {
      let { onChange } = this;
      if (isValidHex(data) && isPresent(onChange)) {
        onChange(convertColor(data));
      }
    },
    onHandleChangeR(r) {
      if (!r) {
        return;
      }
      let { rgb } = this;
      this.onHandleChangeRGB({
        r: parseInt(r),
        g: rgb.g,
        b: rgb.b
      });
    },
    onHandleChangeG(g) {
      if (!g) {
        return;
      }
      let { rgb } = this;
      this.onHandleChangeRGB({
        r: rgb.r,
        g: parseInt(g),
        b: rgb.b
      });
    },
    onHandleChangeB(b) {
      if (!b) {
        return;
      }
      let { rgb } = this;
      this.onHandleChangeRGB({
        r: rgb.r,
        g: rgb.g,
        b: parseInt(b)
      });
    },
    onHandleChangeAlpha(alpha) {
      if (alpha < 0) {
        alpha = 0
      } else if (alpha > 100) {
        alpha = 100
      }

      alpha /= 100;

      let { onChange, hsl } = this;
      if (isPresent(onChange)) {
        onChange({
          h: hsl.h,
          s: hsl.s,
          l: hsl.l,
          a: alpha,
          source: 'rgb',
        })
      }
    }
  }
});
