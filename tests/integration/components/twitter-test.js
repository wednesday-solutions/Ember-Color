import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find, fillIn, triggerEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | twitter', function(hooks) {
  setupRenderingTest(hooks);

  test('it gives a callback when the user selects a color', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#ff6900');
    });
    await render(hbs`<Twitter @onChange={{onChange}}/>`);
    await click('[data-test-ember-color-swatch]');
  });

  test('it gives a callback when the user hovers over a color', async function(assert) {
    this.set('onHover', (color) =>  {
      assert.equal(color.hex, '#ff6900');
    });
    await render(hbs`<Twitter @onHover={{onHover}} />`);
    await triggerEvent('[data-test-ember-color-swatch]', 'mouseover');
  });

  test('it shows the selected color in the input text field', async function(assert) {
    this.set('selectedColor', {
      hex: '#FF6900'
    });
    await render(hbs`<Twitter @selectedColor={{selectedColor}}/>`);
    assert.equal(find('[data-test-twitter-input-text]').value, 'FF6900');
  });

  test('it gives a callback when the user enters a valid color in the text field', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#ff1234');
    });
    await render(hbs`<Twitter @onChange={{onChange}}/>`);
    await fillIn('[data-test-twitter-input-text]', 'FF1234');
  });

  test('it will not give a callback when the user enters an invalid color in the text field', async function(assert) {
    assert.expect(0);
    this.set('onChange', () => {
      assert.notOk();
    });
    await render(hbs`<Twitter @onChange={{onChange}}/>`);
    await fillIn('[data-test-twitter-input-text]', '1');
  });
});
