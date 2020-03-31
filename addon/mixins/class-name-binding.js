import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Mixin.create({
  classNameBindings: ['customBinding'],
  customBinding: computed('styleNamespace', 'className', function() {
    let classNames = [this.styleNamespace];
    if (isPresent(this.className)) {
      classNames.push(this.className);
    }
    return classNames.join(' ');
  })
});
