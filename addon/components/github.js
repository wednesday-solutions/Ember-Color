import Component from '@ember/component';
import { assert } from '@ember/debug';
import { isNone } from '@ember/utils';
import layout from '../templates/components/github';
import { isPresent } from '@ember/utils';
import ClassNameBinding from '../mixins/class-name-binding';
import ColorPropertyBinding from '../mixins/color-property-binding';
import TriangleClassNameBinding from '../mixins/triangle-class-name-binding';
import { convertColor } from '../utils/color';
import { allPositions as trianglePositions } from '../utils/triangle-position';

const defaultColors = [
  '#B80000',
  '#DB3E00',
  '#FCCB00',
  '#008B02',
  '#006B76',
  '#1273DE',
  '#004DCF',
  '#5300EB',
  '#EB9694',
  '#FAD0C3',
  '#FEF3BD',
  '#C1E1C5',
  '#BEDADC',
  '#C4DEF6',
  '#BED3F3',
  '#D4C4FB'
];

export default Component.extend(ClassNameBinding, TriangleClassNameBinding, ColorPropertyBinding, {
  layout,
  colors: null,
  className: null,
  trianglePosition: 'top-left',
  hideTriangle: false,
  onChange: null,
  selectedColor: null,

  init() {
    this._super(...arguments);
    if (isNone(this.colors)) {
      this.set('colors', defaultColors);
    }
    assert('Triangle position should be one of top-left, top-right, bottom-left or bottom-right', trianglePositions.indexOf(this.trianglePosition) !== -1);
  },
  actions: {
    onSwatchClicked(hexColor) {
      let { onChange } = this;
      if (isPresent(onChange)) {
        onChange(convertColor(hexColor));
      }
    }
  }
});
