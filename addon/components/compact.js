import Component from '@ember/component';
import layout from '../templates/components/compact';
import { isValidHex, convertRBGToColor, convertColor } from '../utils/color';
import ColorPropertyBinding from '../mixins/color-property-binding';
import { isPresent } from '@ember/utils';

export default Component.extend(ColorPropertyBinding, {
  layout,
  colors: null,
  selectedColor: null,
  onChange: null,
  onHover: null,
  grayBoxShadow: 'rgb(221, 221, 221) 0px 0px 0px 1px inset',

  init() {
    this._super(...arguments);
    this.set('colors', [
      '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
      '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
      '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400',
      '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
      '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00',
      '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'
    ]);
  },
  handleChange(red, green, blue) {
    let { onChange } = this;
    if (isPresent(onChange)) {
      onChange(convertRBGToColor(red, green, blue));
    }
  },
  actions: {
    onHexValueChanged(element) {
      let { value: hexColor } = element.target;
      let { onChange } = this;
      if (isValidHex(hexColor) && isPresent(onChange)) {
        onChange(convertColor(hexColor));
      }
    },
    onRedValueChanged(element) {
      let { value: redValue } = element.target;
      if (redValue) {
        this.handleChange(redValue, this.blueValue, this.greenValue);
      }
    },
    onGreenValueChanged(element) {
      let { value: greenValue } = element.target;
      if (greenValue) {
        this.handleChange(this.redValue, this.blueValue, greenValue);
      }
    },
    onBlueValueChanged(element) {
      let { value: blueValue } = element.target;
      if (blueValue) {
        this.handleChange(this.redValue, blueValue, this.greenValue);
      }
    },
    onSwatchClicked(hexColor) {
      let { onChange } = this;
      if (isPresent(onChange)) {
        onChange(convertColor(hexColor));
      }
    }
  }
});
