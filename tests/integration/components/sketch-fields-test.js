import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {render, findAll, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sketch-fields', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the hex, rgb and alpha editable text correctly', async function(assert) {
    this.set('selectedColor', {
      hex: '#FF0000',
      rgb: {
        r: 255,
        g: 0,
        b: 0,
        a: 0.5
      }
    });
    await render(hbs`<SketchFields @selectedColor={{selectedColor}} />`);
    const inputFields = findAll('[data-test-editable-input-field]');
    assert.equal(inputFields.length, 5);
    assert.equal(inputFields[0].value, 'FF0000');
    assert.equal(inputFields[1].value, '255');
    assert.equal(inputFields[2].value, '0');
    assert.equal(inputFields[3].value, '0');
    assert.equal(inputFields[4].value, '50');
  });

  test('it should not show the alpha text input if disabledAlpha is false', async function(assert) {
    this.set('selectedColor', {
      hex: '#FF0000',
      rbg: {
        r: 255,
        g: 0,
        b: 0,
        a: 0.5
      }
    });
    this.set('disableAlpha', true);
    await render(hbs`<SketchFields @selectedColor={{selectedColor}} @disableAlpha={{disableAlpha}}/>`);
    assert.equal(findAll('[data-test-editable-input-field]').length, 4);
  });

  test('it should give a callback when the user change the color', async function(assert) {
    this.set('selectedColor', {
      hex: '#FF0000',
      rgb: {
        r: 255,
        g: 0,
        b: 0,
        a: 0.5
      }
    });
    this.set('onChange', (selectedColor) => {
      assert.equal(selectedColor.hex, '#ffffff');
    });
    await render(hbs`<SketchFields @selectedColor={{selectedColor}} @onChange={{onChange}}/>`);
    await fillIn('[data-test-editable-input-field]', 'FFFFFF');
  })
});
