import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  trianglePosition: 'top-left',

  triangleClassName: computed('styleNamespace', 'trianglePosition', function() {
    return `${this.styleNamespace}__triangle--${this.trianglePosition}`
  }),
  triangleShadowClassName: computed('styleNamespace', 'trianglePosition', function() {
    return `${this.styleNamespace}__triangle-shadow--${this.trianglePosition}`
  })
});
