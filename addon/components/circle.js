import Component from '@ember/component';
import layout from '../templates/components/circle';
import ColorPropertyBinding from '../mixins/color-property-binding';
import { isPresent } from '@ember/utils';
import ClassNameBinding from '../mixins/class-name-binding';
import {convertColor, isValidHex} from "../utils/color";

export default Component.extend(ClassNameBinding, ColorPropertyBinding, {
  layout,
  colors: null,
  className: null,
  selectedColor: null,
  onChange: null,

  init() {
    this._super(...arguments);
    this.set('colors', [
      '#F44336',
      '#E91E63',
      '#9C27B0',
      '#673AB7',
      '#3F51B5',
      '#2196F3',
      '#03A9F4',
      '#00BCD4',
      '#009688',
      '#4CAF50',
      '#8BC34A',
      '#CDDC39',
      '#FFEB3B',
      '#FFC107',
      '#FF9800',
      '#FF5722',
      '#795548',
      '#607D8B'
    ]);
  },
  actions: {
    onCircleSwatchSelected(color) {
      if (isValidHex(color) && isPresent(this.onChange)) {
        this.onChange(convertColor(color));
      }
    }
  }
});
