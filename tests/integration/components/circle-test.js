import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | circle', function(hooks) {
  setupRenderingTest(hooks);

  test('it should give a callback when the user selects a color', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#f44336');
    });
    await render(hbs`<Circle @onChange={{onChange}}/>`);
    await click('[data-test-ember-color-swatch]');
  });
});
