import Component from '@ember/component';
import layout from '../templates/components/swatch';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import Hoverable from '../mixins/hoverable';
import ClassNameBinding from '../mixins/class-name-binding';
import { htmlSafe } from '@ember/template';

export default Component.extend(Hoverable, ClassNameBinding, {
  layout,
  hexColor: null,
  boxShadow: null,
  borderColor: null,
  className: null,
  onClick: null,
  onHover: null,
  isActive: false,
  attributeBindings: ['style'],
  'data-test-ember-color-swatch': true,

  style: computed('hexColor', 'boxShadow', 'borderColor', function() {
    let { hexColor, boxShadow, borderColor } = this;
    return htmlSafe(`background-color: ${hexColor}; border-color: ${borderColor}; box-shadow: ${boxShadow};`);
  }),
  mouseEnter() {
    this._super(...arguments);
    if (isPresent(this.onHover)) {
      this.onHover(this.hexColor);
    }
  },
  click() {
    let { onClick, hexColor } = this;
    if (isPresent(onClick) && isPresent(hexColor)) {
      this.onClick(hexColor);
    }
  }
});
