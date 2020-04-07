import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, findAll, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | swatches', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a default set of colors', async function(assert) {
    await render(hbs`<Swatches />`);
    assert.equal(findAll('[data-test-ember-color-swatch]').length, 95);
  });

  test('it should give a callback when a color is selected', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#b71c1c');
    });
    await render(hbs`<Swatches @onChange={{this.onChange}}/>`);
    await click('[data-test-ember-color-swatch]');
  });
});
