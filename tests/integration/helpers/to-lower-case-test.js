import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | to-lower-case', function(hooks) {
  setupRenderingTest(hooks);

  test('it should convert the string to lower case', async function(assert) {
    this.set('inputValue', 'ABcD');

    await render(hbs`{{to-lower-case inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'abcd');
  });
});
