import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find, triggerEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | block', function(hooks) {
  setupRenderingTest(hooks);

  test('it gives a callback when the user selects a color', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#d9e3f0');
    });
    await render(hbs`<Block @onChange={{onChange}}/>`);
    await click(this.element.querySelectorAll('[data-test-ember-color-swatch]')[2]);
  });

  test('it gives a callback when the user hovers over a color', async function(assert) {
    this.set('onHover', (color) => {
      assert.equal(color.hex, '#d9e3f0');
    });
    await render(hbs`<Block @onHover={{onHover}}/>`);
    await triggerEvent(this.element.querySelectorAll('[data-test-ember-color-swatch]')[2], 'mouseover');
  });

  test('it gives a callback when the user enters a valid hex color in the text field', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#ffffff');
    });
    await render(hbs`<Block @onChange={{onChange}}/>`);
    await fillIn('[data-test-block-input-text]', '#ffffff');
  });

  test('it changes the text in the text field depending on the selected color', async function(assert) {
    this.set('selectedColor', {
      hex: "#ffffff"
    });
    await render(hbs`<Block @selectedColor={{this.selectedColor}}/>`);
    assert.equal(find('[data-test-block-input-text]').value, '#ffffff');
  });
});
