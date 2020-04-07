import { computed } from '@ember/object';
import { convertColor } from '../utils/color';

export function rgbValueMacro(colorPropertyName) {
  return computed(colorPropertyName, function() {
    let convertedColor = convertColor({
      hex: this.get(colorPropertyName)
    });
    return convertedColor.rgb;
  });
}

export function rgbPropertyValueMacro(rgbValuePropertyName, propertyName) {
  return computed(rgbValuePropertyName, function() {
    return this.get(rgbValuePropertyName)[propertyName];
  })
}
