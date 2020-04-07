import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | editable-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the label correctly', async function(assert) {
    this.set('label', 'Test');
    await render(hbs`<EditableInput @label={{label}}/>`);
    assert.equal(find('[data-test-editable-input-label]').textContent.trim(), 'Test');
  });

  test('it renders the selected color in the input field', async function(assert) {
    this.set('color', 'FF0000');
    await render(hbs`<EditableInput @value={{color}}/>`);
    assert.equal(find('[data-test-editable-input-field]').value, 'FF0000');
  });

  test('it should hide the label if hideLabel is set to true', async function(assert) {
    this.set('color', 'FF0000');
    await render(hbs`<EditableInput @value={{color}} @label="R" @hideLabel="true"/>`);
    assert.notOk(find('[data-test-editable-input-label]'));
  });
});
