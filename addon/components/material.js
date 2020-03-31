import Component from '@ember/component';
import layout from '../templates/components/material';
import { isValidHex, convertRBGToColor, convertColor } from '../utils/color';
import { isPresent } from '@ember/utils';
import ColorPropertyBinding from '../mixins/color-property-binding';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Component.extend(ColorPropertyBinding, {
  layout,
  selectedColor: null,
  onChange: null,

  borderBottomColor: computed('hex', function() {
    return htmlSafe(`border-bottom-color: ${this.hex}`);
  }),

  actions: {
    onHexValueChanged(hexColor) {
      let { onChange } = this;
      if (isValidHex(hexColor) && isPresent(onChange)) {
        onChange(convertColor(hexColor));
      }
    },
    onRedValueChanged(redValue) {
      if (!redValue) {
        return;
      }
      let { onChange } = this;
      if (isPresent(onChange)) {
        onChange(convertRBGToColor(redValue, this.greenValue, this.blueValue));
      }
    },
    onBlueValueChanged(blueValue) {
      if (!blueValue) {
        return;
      }
      let { onChange } = this;
      if (isPresent(onChange)) {
        onChange(convertRBGToColor(this.redValue, this.greenValue, blueValue));
      }
    },
    onGreenValueChanged(greenValue) {
      if (!greenValue) {
        return;
      }
      let { onChange } = this;
      if (isPresent(onChange)) {
        onChange(convertRBGToColor(this.redValue, greenValue, this.blueValue));
      }
    }
  }
});
