import Component from '@ember/component';
import layout from '../templates/components/slider-pointer';
import ClassNameBinding from '../mixins/class-name-binding';

export default Component.extend(ClassNameBinding, {
  layout,
  className: null
});
