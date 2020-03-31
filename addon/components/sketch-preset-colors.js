import Component from '@ember/component';
import ColorPropertyBinding from '../mixins/color-property-binding';
import { isPresent } from '@ember/utils';
import { convertColor, isValidHex } from "../utils/color";
import layout from '../templates/components/sketch-preset-colors';

export default Component.extend(ColorPropertyBinding, {
  layout,
  selectedColor: null,
  hexColors: null,
  onChange: null,
  actions: {
    onSwatchSelected(hexColor) {
      let { onChange } = this;
      if (isValidHex(hexColor) && isPresent(onChange)) {
        onChange(convertColor(hexColor));
      }
    }
  }
});
