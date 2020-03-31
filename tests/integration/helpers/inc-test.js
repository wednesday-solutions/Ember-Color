import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | inc', function(hooks) {
  setupRenderingTest(hooks);

  test('it should increment the value passed', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{inc inputValue}}`);

    assert.equal(this.element.textContent.trim(), '1235');
  });
});
