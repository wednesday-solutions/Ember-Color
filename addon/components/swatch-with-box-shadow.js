import Swatch from './swatch';
import layout from '../templates/components/swatch-with-box-shadow';
import { computed } from '@ember/object';

export default Swatch.extend({
  layout,
  customShadow: null,
  attributeBindings: ['data-test-ember-color-swatch-with-box-shadow'],
  'data-test-ember-color-swatch-with-box-shadow': true,
  boxShadow: computed('hexColor', 'isActive', 'customShadow', function() {
    let { hexColor, isActive, customShadow } = this;
    return isActive ? `0 0 4px ${hexColor}, ${customShadow}` : null;
  })
});
