import Component from '@ember/component';
import layout from '../templates/components/swatches-color';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  first: false,
  last: false,
  isActive: false,
  hexColor: null,
  onClick: null,

  swatchClassName: computed('styleNamespace', 'hexColor', 'first', 'last', function() {
    let { hexColor, first, last, styleNamespace } = this;
    let classNames = [`${styleNamespace}__swatch`];
    if (first) {
      classNames.push(`${styleNamespace}__swatch--first`);
    } else if (last) {
      classNames.push(`${styleNamespace}__swatch--last`);
    }
    if (hexColor === '#FFFFFF') {
      classNames.push(`${styleNamespace}__swatch--white`);
    }
    return classNames.join(' ');
  }),
  checkClassName: computed('styleNamespace', 'isActive', function() {
    let { styleNamespace, isActive } = this;
    let classNames = [`${styleNamespace}__check`];
    if (isActive) {
      classNames.push(`${styleNamespace}__check--active`);
    }
    return classNames.join(' ');
  })
});
