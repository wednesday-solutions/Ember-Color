import Component from '@ember/component';
import layout from '../templates/components/twitter';
import ClassNameBinding from '../mixins/class-name-binding';
import TriangleClassNameBinding from '../mixins/triangle-class-name-binding';
import TrianglePositions from '../utils/triangle-position';
import { assert } from '@ember/debug';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { convertColor } from '../utils/color';
import ColorPropertyBinding from '../mixins/color-property-binding';
import { isValidHex } from '../utils/color';

const validTrianglePositions = [TrianglePositions.TOP_LEFT, TrianglePositions.TOP_RIGHT];
export default Component.extend(ClassNameBinding, TriangleClassNameBinding, ColorPropertyBinding, {
  layout,
  hexColors: null,
  hideTriangle: false,
  selectedColor: null,
  onChange: null,
  onHover: null,

  selectedColorHexDisplayString: computed('hex', function() {
    let { hex } = this;
    if (isPresent(hex)) {
      return hex.replace('#', '');
    }
    return '';
  }),

  init() {
    this._super(...arguments);
    this.set('hexColors', [
      '#FF6900',
      '#FCB900',
      '#7BDCB5',
      '#00D084',
      '#8ED1FC',
      '#0693E3',
      '#ABB8C3',
      '#EB144C',
      '#F78DA7',
      '#9900EF'
    ]);
    assert('Triangle position should be one of top-left or top-right', validTrianglePositions.indexOf(this.trianglePosition) !== -1);
  },
  actions: {
    onSwatchHover(hexColor) {
      let { onHover } = this;
      if (isValidHex(hexColor) && isPresent(onHover)) {
        onHover(convertColor(hexColor));
      }
    },
    onSwatchSelected(hexColor) {
      let { onChange } = this;
      if (isValidHex(hexColor) && isPresent(onChange)) {
        onChange(convertColor(hexColor));
      }
    },
    onTextEntered(element) {
      let { onChange } = this;
      if (isValidHex(element.target.value) && isPresent(onChange)) {
        onChange(convertColor(element.target.value));
      }
    }
  }
});
