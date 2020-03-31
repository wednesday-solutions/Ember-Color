import Mixin from '@ember/object/mixin';

export default Mixin.create({
  hover: false,
  mouseEnter() {
    this.set('hover', true);
  },
  mouseLeave() {
    this.set('hover', false);
  }
});
