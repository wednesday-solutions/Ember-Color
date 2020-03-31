import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { calculateChange } from '../utils/alpha';
import { isPresent } from '@ember/utils';
import ClassNameBinding from '../mixins/class-name-binding';
import ColorPropertyBinding from '../mixins/color-property-binding';
import { convertColor } from '../utils/color';
import layout from '../templates/components/alpha';

export default Component.extend(ClassNameBinding, ColorPropertyBinding, {
  layout,
  selectedColor: null,
  className: null,
  borderRadius: 20,
  onChange: null,
  attributeBindings: ['borderRadiusStyle:style'],

  pointerStyle: computed('rgb.a', function() {
    return htmlSafe(`left: ${ this.rgb.a * 100 }%`);
  }),
  gradientStyle: computed('rgb.{r,g,b}', function() {
    let { rgb } = this;
    return htmlSafe(`background: linear-gradient(to right, rgba(${ rgb.r },${ rgb.g },${ rgb.b }, 0) 0%, rgba(${ rgb.r },${ rgb.g },${ rgb.b }, 1) 100%)`)
  }),
  unbindEventListeners() {
    if (this._handleChange && this._handleMouseUp) {
      window.removeEventListener('mousemove', this._handleChange);
      window.removeEventListener('mouseup', this._handleMouseUp);
    }
  },
  handleChange(event) {
    let { hsl, rgb, onChange } = this;
    let alpha = calculateChange(event, hsl, rgb.a, this.element);
    if (isPresent(onChange) && isPresent(alpha)) {
      onChange(convertColor(alpha));
    }
  },
  handleMouseUp() {
    this.unbindEventListeners();
  },
  willDestroyElement() {
    this.unbindEventListeners();
  },
  actions: {
    handleMouseDown(event) {
      this.handleChange(event);
      this._handleChange = this.handleChange.bind(this);
      this._handleMouseUp = this.handleMouseUp.bind(this);
      window.addEventListener('mousemove', this._handleChange);
      window.addEventListener('mouseup', this._handleMouseUp);
    }
  }
});
