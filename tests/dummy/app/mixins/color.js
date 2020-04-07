import Mixin from '@ember/object/mixin';
import { convertColor } from 'ember-color/utils/color';

export default Mixin.create({
  selectedColor: null,

  init() {
    this._super(...arguments);
    this.set('selectedColor', convertColor('#FFEDDE'));
  },
  resetColor() {
    this.set('selectedColor', convertColor('#FFEDDE'));
  }
});
