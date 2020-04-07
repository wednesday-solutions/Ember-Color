import Component from '@ember/component';
import layout from '../templates/components/slider-swatch';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Component.extend({
  layout,
  hsl: null,
  offset: null,
  first: false,
  last: false,
  isActive: false,
  onClick: null,
  onHover: null,
  swatchClasses: computed('styleNamespace', 'isActive', 'first', 'last', function() {
    let classNames = [`${this.styleNamespace}__swatch`];
    let { isActive, first, last } = this;
    if (isActive) {
      classNames.push(`${this.styleNamespace}__swatch--active`);
    }
    if (first) {
      classNames.push(`${this.styleNamespace}__first`);
    } else if(last) {
      classNames.push(`${this.styleNamespace}__last`);
    }
    return classNames.join(' ');
  }),
  backgroundColor: computed('hsl', 'offset', function() {
    let { hsl, offset } = this;
    return `hsl(${hsl.h}, 50%, ${offset * 100}%)`;
  }),

  callCallbackWithHsl(callbackName) {
    let { hsl, offset } = this;
    if (isPresent(this.get(callbackName))) {
      this.get(callbackName)({
        h: hsl.h,
        s: 0.5,
        l: offset,
        source: 'hsl',
      });
    }
  },
  actions: {
    onClick() {
      this.callCallbackWithHsl('onClick');
    },
    onHover() {
      this.callCallbackWithHsl('onHover');
    }
  }
});
