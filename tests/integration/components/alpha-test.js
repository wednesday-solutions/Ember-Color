import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | alpha', function(hooks) {
  setupRenderingTest(hooks);

  test('it should give a callback when the user selects a color', async function(assert) {
    assert.expect(1);
    this.set('selectedColor', {
      hsl: {
        h: 0,
        s: 1,
        l: 0.5,
        a: 1
      },
      rgb: {
        r: 255,
        g: 0,
        b: 0,
        a: 1
      }
    });
    let onChange = (color) => {
      assert.equal(color.hex, "#ff0000");
    };
    this.set('onChange',onChange);
    await render(hbs`<Alpha @selectedColor={{selectedColor}} @onChange={{onChange}}/>`);
    await click('[data-test-ember-color-alpha-picker-container]');
  });
});
