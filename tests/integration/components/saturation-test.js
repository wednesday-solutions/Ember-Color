import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | saturation', function(hooks) {
  setupRenderingTest(hooks);

  test('it should give a callback when the user selects a color', async function(assert) {
    this.set('selectedColor', {
      hsl: {
        h: 0,
        s: 1,
        l: 0.5,
        a: 1
      },
      hsv :{
        h: 0,
        s: 1,
        v: 1,
        a: 1
      }
    });
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#fed6d6');
    });
    await render(hbs`<Saturation @onChange={{this.onChange}} @selectedColor={{this.selectedColor}}/>`);
    await click('[data-test-ember-color-saturation-container]');
  });
});
