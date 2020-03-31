import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | material', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the hex value of the selected color', async function(assert) {
    this.set('selectedColor', {
      hex: '#FF0000'
    });
    await render(hbs`<Material @selectedColor={{selectedColor}}/>`);
    assert.equal(find('[data-test-editable-input-field]').value, '#FF0000');
  });

  test('it renders the rgb value of the selected color', async function(assert) {
    this.set('selectedColor', {
      hex: '#ff0000',
      rgb: {
        r: 255,
        g: 0,
        b: 0
      }
    });
    await render(hbs`<Material @selectedColor={{selectedColor}}/>`);
    assert.equal(this.element.querySelectorAll('[data-test-editable-input-field]')[1].value, '255');
    assert.equal(this.element.querySelectorAll('[data-test-editable-input-field]')[2].value, '0');
    assert.equal(this.element.querySelectorAll('[data-test-editable-input-field]')[3].value, '0');
  });

  test('it gives a callback when the user changes the hex value', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#ff1234');
    });
    this.set('selectedColor', {
      hex: '#ff0000'
    });
    await render(hbs`<Material @selectedColor={{selectedColor}} @onChange={{onChange}}/>`);
    await fillIn('[data-test-editable-input-field]', 'FF1234');
  });

  test('it gives a callback when the user changes the red value', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#000000');
    });
    this.set('selectedColor', {
      hex: '#ff0000'
    });
    await render(hbs`<Material @selectedColor={{selectedColor}} @onChange={{onChange}}/>`);
    await fillIn(this.element.querySelectorAll('[data-test-editable-input-field]')[1], 0);
  });

  test('it gives a callback when the user changes the green value', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#000000');
    });
    this.set('selectedColor', {
      hex: '#00ff00'
    });
    await render(hbs`<Material @selectedColor={{selectedColor}} @onChange={{onChange}}/>`);
    await fillIn(this.element.querySelectorAll('[data-test-editable-input-field]')[2], 0);
  });

  test('it gives a callback when the user changes the blue value', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#000000');
    });
    this.set('selectedColor', {
      hex: '#0000ff'
    });
    await render(hbs`<Material @selectedColor={{selectedColor}} @onChange={{onChange}}/>`);
    await fillIn(this.element.querySelectorAll('[data-test-editable-input-field]')[3], 0);
  });
});
