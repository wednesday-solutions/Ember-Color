import Component from '@ember/component';
import { isPresent } from '@ember/utils';
import layout from '../templates/components/editable-input';

export default Component.extend({
  layout,
  label: null,
  color: null,
  value: null,
  onChange: null,
  hideLabel: false,
  labelClassName: null,
  inputClassName: null,
  styleInput: null,
  actions: {
    onChange(event) {
      let { onChange } = this;
      if (isPresent(onChange)) {
        onChange(event.target.value);
      }
    }
  }
});
