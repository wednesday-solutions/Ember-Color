import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { red } from '../color';

module('Integration | Component | circle-swatch', function(hooks) {
  setupRenderingTest(hooks);

  test('it should give a callback when the circle is selected', async function(assert) {
    this.set('onClick', () => {
      assert.ok(true);
    });
    this.set('color', red.hex);
    await render(hbs`<CircleSwatch @color={{color}} @onClick={{onClick}}/>`);
    await click('[data-test-ember-color-swatch]');
  });
});
