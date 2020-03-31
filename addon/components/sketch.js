import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import ColorPropertyBinding from '../mixins/color-property-binding';
import layout from '../templates/components/sketch';

export default Component.extend(ColorPropertyBinding, {
  layout,
  selectedColor: null,
  onChange: null,
  onSwatchHover: null,
  disableAlpha: false,
  presetColors: null,

  activeBackgroundStyle: computed('rgb.{r,g,b,a}', function() {
    let { rgb } = this;
    return htmlSafe(`background:rgba(${ rgb.r },${ rgb.g },${ rgb.b },${ rgb.a })`);
  }),
  init() {
    this._super(...arguments);
    this.set('presetColors', ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505',
      '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000',
      '#4A4A4A', '#9B9B9B', '#FFFFFF']);
  }
});
