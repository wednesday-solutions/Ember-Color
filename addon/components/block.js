import Component from '@ember/component';
import layout from '../templates/components/block';
import { computed } from '@ember/object';
import { isNone, isPresent } from '@ember/utils';
import { convertColor, isValidHex } from "../utils/color";
import ColorPropertyBinding from '../mixins/color-property-binding';

export default Component.extend(ColorPropertyBinding, {
  layout,
  colors: null,
  selectedColor: null,
  onChange: null,
  onHover: null,
  headerBorderColor: computed('hex', function() {
    return `transparent transparent ${this.hex}`;
  }),
  init() {
    this._super(...arguments);
    this.set('colors', [
      '#D9E3F0',
      '#F47373',
      '#697689',
      '#37D67A',
      '#2CCCE4',
      '#555555',
      '#dce775',
      '#ff8a65',
      '#ba68c8'
    ]);
    if (isNone(this.selectedColor)) {
      this.set('selectedColor', '#D9E3F0');
    }
  },
  actions: {
    onHover(hexColor) {
      let { onHover } = this;
      if (isPresent(onHover)) {
        onHover(convertColor(hexColor));
      }
    },
    onSwatchClicked(hexColor) {
      let { onChange } = this;
      if (isPresent(onChange)) {
        onChange(convertColor(hexColor));
      }
    },
    onTextEntered(element) {
      let { onChange } = this;
      if (isValidHex(element.target.value) && isPresent(onChange)) {
        onChange(convertColor(element.target.value));
      }
    }
  }
});
