import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | compact', function(hooks) {
  setupRenderingTest(hooks);

  test('it gives a callback when the hex value is changed', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#123456');
    });
    await render(hbs`<Compact @onChange={{onChange}}/>`);
    await fillIn('[data-test-compact-hex-input]', '123456');
  });

  test('it gives a callback when the red value is changed', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#000000');
    });
    await render(hbs`<Compact @onChange={{onChange}}/>`);
    await fillIn('[data-test-compact-red-input]', 255);
  });

  test('it gives a callback when the green value is changed', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#000000');
    });
    await render(hbs`<Compact @onChange={{onChange}}/>`);
    await fillIn('[data-test-compact-green-input]', 255);
  });

  test('it gives a callback when the blue value is changed', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#000000');
    });
    await render(hbs`<Compact @onChange={{onChange}}/>`);
    await fillIn('[data-test-compact-blue-input]', 255);
  });

  test('it should update the rgb value depending on the color that is selected', async function(assert) {
    this.set('selectedColor', {
      hex: '#ffffff',
      rgb: {
        r: 255,
        g: 255,
        b: 255
      }
    });
    await render(hbs`<Compact @selectedColor={{selectedColor}}/>`);
    assert.equal(find('[data-test-compact-red-input]').value, '255');
    assert.equal(find('[data-test-compact-green-input]').value, '255');
    assert.equal(find('[data-test-compact-blue-input]').value, '255');
  });

  test('it should update the hex value depending on the color that is selected', async function(assert) {
    this.set('selectedColor', {
      hex: '#ffffff'
    });
    await render(hbs`<Compact @selectedColor={{selectedColor}}/>`);
    assert.equal(find('[data-test-compact-hex-input]').value, '#ffffff');
  });

  test('it should show dot on the selected color', async function(assert) {
    this.set('selectedColor', {
      hex: '#ffffff'
    });
    await render(hbs`<Compact @selectedColor={{selectedColor}}/>`);
    assert.ok(find('[data-test-compact-dot-indicator]'));
  })
});
