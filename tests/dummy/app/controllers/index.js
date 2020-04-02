import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { isPresent } from '@ember/utils';
import { alias } from '@ember/object/computed';
import { convertColor } from 'ember-color/utils/color';

export default Controller.extend({
  color: null,
  colorHex: computed('color.hex', function() {
    return this.color.hex.toUpperCase();
  }),
  colorHsl: alias('color.hsl'),

  init() {
    this._super(...arguments);
    this.set('color', convertColor('#FFEDDE'));
  },
  previewSelectedColorStyle: computed('colorHex', function() {
    let { colorHex } = this;
    return htmlSafe(`background-color: ${colorHex};`);
  }),
  actions: {
    onSliderChanged(hsl) {
      if (isPresent(hsl)) {
        this.set('color', convertColor(hsl));
      }
    },
    onHexColorChanged(hexColor) {
      this.set('color', convertColor(hexColor));
    }
  }
});
