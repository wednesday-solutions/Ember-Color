import Component from '@ember/component';
import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';
import { convertColor } from '../utils/color';
import ColorPropertyBinding from '../mixins/color-property-binding';
import layout from '../templates/components/slider-swatches';

export default Component.extend(ColorPropertyBinding, {
  layout,
  selectedColor: null,
  onChange: null,
  defaultOffsets: null,
  colorsDataSource: computed('hsl.{l,s}', function() {
    let { hsl } = this;
    return [
      {
        offset: 0.80,
        first: true,
        isActive: Math.round(hsl.l * 100) / 100 === 0.80 && Math.round(hsl.s * 100) / 100 === 0.50
      },
      {
        offset: 0.65,
        isActive: Math.round(hsl.l * 100) / 100 === 0.65 && Math.round(hsl.s * 100) / 100 === 0.50
      },
      {
        offset: 0.50,
        isActive: Math.round(hsl.l * 100) / 100 === 0.50 && Math.round(hsl.s * 100) / 100 === 0.50
      },
      {
        offset: 0.35,
        isActive: Math.round(hsl.l * 100) / 100 === 0.35 && Math.round(hsl.s * 100) / 100 === 0.50
      },
      {
        offset: 0.20,
        last: true,
        isActive: Math.round(hsl.l * 100) / 100 === 0.20 && Math.round(hsl.s * 100) / 100 === 0.50
      }
    ]
  }),
  actions: {
    onClick(hsl) {
      let { onChange } = this;
      if (isPresent(onChange)) {
        onChange(convertColor(hsl));
      }
    }
  }
});
