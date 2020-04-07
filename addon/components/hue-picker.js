import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { convertColor } from '../utils/color';
import { isPresent } from '@ember/utils';
import { calculateChange } from '../utils/hue';
import ColorPropertyBinding from '../mixins/color-property-binding';
import layout from '../templates/components/hue-picker';

export default Component.extend(ColorPropertyBinding, {
  layout,
  height: 16,
  selectedColor: null,
  onChange: null,
  attributeBindings: ['style', 'data-test-ember-color-hue-picker'],
  'data-test-ember-color-hue-picker': true,

  style: computed('height', function() {
    let { height } = this;
    return htmlSafe(`height: ${height}px;width:100%`);
  }),

  pickerPosition: computed('hsl', 'hsl.h', function() {
    let { hsl } = this;
    return htmlSafe(`left: ${(hsl.h * 100)/360}%; position: absolute`);
  }),
  unbindEventListeners() {
    if (this._handleChange && this._handleMouseUp) {
      window.removeEventListener('mousemove', this._handleChange);
      window.removeEventListener('mouseup', this._handleMouseUp);
    }
  },
  handleChange(event) {
    let { onChange, hsl } = this;
    let hue = calculateChange(event, hsl, this.element);
    if (isPresent(onChange) && isPresent(hue)) {
      onChange(convertColor(hue));
    }
  },
  handleMouseUp() {
    this.unbindEventListeners();
  },
  willDestroyElement() {
    this.unbindEventListeners();
  },
  mouseDown(event) {
    this.handleChange(event);
    this._handleChange = this.handleChange.bind(this);
    this._handleMouseUp = this.handleMouseUp.bind(this);
    window.addEventListener('mousemove', this._handleChange);
    window.addEventListener('mouseup', this._handleMouseUp);
  }
});
