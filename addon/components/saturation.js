import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { calculateChange } from '../utils/saturation';
import { throttle } from 'lodash/function';
import { isPresent } from '@ember/utils';
import { convertColor } from '../utils/color';
import ColorPropertyBinding from '../mixins/color-property-binding';
import layout from '../templates/components/saturation';

export default Component.extend(ColorPropertyBinding, {
  layout,
  borderRadius: 0,
  selectedColor: null,
  trackChanges: false,
  onChange: null,
  attributeBindings: ['style'],

  pointerStyle: computed('hsv.{s,v}', function() {
    let { hsv } = this;
    return htmlSafe(`top: ${ -(hsv.v * 100) + 100 }%;left: ${ hsv.s * 100 }%;`)
  }),
  borderRadiusStyle: computed('borderRadius', function() {
    let { borderRadius } = this;
    return htmlSafe(`border-radius:${borderRadius}px;`)
  }),
  style: computed('borderRadius', 'hsl.h', function() {
    let { borderRadius, hsl } = this;
    return htmlSafe(`border-radius:${borderRadius}px; background:hsl(${hsl.h}, 100%, 50%);`)
  }),

  mouseDown(event) {
    let { onChange, hsl } = this;
    this.set('trackChanges', true);

    if (isPresent(onChange)) {
      onChange(convertColor(calculateChange(event, hsl, this.element)))
    }
  },
  mouseMove(event) {
    let { onChange, hsl, trackChanges } = this;
    if (trackChanges && isPresent(onChange)) {
      throttle(() => {
        onChange(convertColor(calculateChange(event, hsl, this.element)))
      }, 50)();
    }
  },
  mouseUp() {
    this.set('trackChanges', false);
  }
});
