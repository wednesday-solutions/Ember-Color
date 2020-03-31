import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | equal', function(hooks) {
  setupRenderingTest(hooks);

  test('it should return true when the values are equal', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{equal inputValue inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('it should return false when the values are not equal', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{equal inputValue 4321}}`);

    assert.equal(this.element.textContent.trim(), 'false');
  });
});
