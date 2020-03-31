import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click, triggerEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slider-swatch', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the color passed to it correctly', async function(assert) {
    this.set('hsl', {
      h: 241
    });
    this.set('offset', '0.8');
    await render(hbs`<SliderSwatch @offset={{offset}} @hsl={{hsl}}/>`);
    assert.equal(find('[data-test-ember-color-swatch]').style["backgroundColor"], "rgb(179, 179, 230)");
  });

  test('it should give a callback when the user selects the color', async function(assert) {
    this.set('onClick', (color) => {
      assert.deepEqual(color, {
        h: 241,
        s: 0.5,
        l: "0.8",
        source: "hsl"
      });
    });
    this.set('hsl', {
      h: 241
    });
    this.set('offset', '0.8');
    await render(hbs`<SliderSwatch @offset={{offset}} @hsl={{hsl}} @onClick={{onClick}}/>`);
    await click('[data-test-ember-color-swatch]');
  });

  test('it should give a callback when the user hovers over a color', async function(assert) {
    this.set('onHover', (color) => {
      assert.deepEqual(color, {
        h: 241,
        s: 0.5,
        l: "0.8",
        source: "hsl"
      });
    });
    this.set('hsl', {
      h: 241
    });
    this.set('offset', '0.8');
    await render(hbs`<SliderSwatch @offset={{offset}} @hsl={{hsl}} @onHover={{onHover}}/>`);
    await triggerEvent('[data-test-ember-color-swatch]', 'mouseover');
  });
});
