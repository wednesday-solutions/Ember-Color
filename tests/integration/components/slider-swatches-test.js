import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slider-swatches', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the slider swatches correctly', async function(assert) {
    this.set('selectedColor', {
      hsl: {
        h: 241
      }
    });
    await render(hbs`<SliderSwatches @selectedColor={{selectedColor}}/>`);
    assert.equal(findAll('[data-test-ember-color-swatch]').length, 5);
  });

  test('it gives a callback when the user selects a slider swatch', async function(assert) {
    this.set('selectedColor', {
      hsl: {
        h: 241
      }
    });

    let onChange = (color) => {
      assert.deepEqual(color.hsl, {
        a: 1,
        h: 240.99999999999997,
        s: 0.4999999999999999,
        l: 0.8
      })
    };
    this.set('onChange', onChange);
    await render(hbs`<SliderSwatches @selectedColor={{selectedColor}} @onChange={{onChange}}/>`);
    await click('[data-test-ember-color-swatch]');
  });
});
