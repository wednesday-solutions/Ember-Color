import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const colors = ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505',
  '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000',
  '#4A4A4A', '#9B9B9B', '#FFFFFF'];

module('Integration | Component | sketch-preset-colors', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the colors passed to it correctly', async function(assert) {

    this.set('hexColors', colors);
    await render(hbs`<SketchPresetColors @hexColors={{this.hexColors}}/>`);
    assert.equal(findAll('[data-test-ember-color-swatch-with-box-shadow]').length, 15);
  });

  test('it gives a callback when the user selects a color', async function(assert) {
    assert.expect(1);
    this.set('hexColors', colors);
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#d0021b');
    });
    await render(hbs`<SketchPresetColors @hexColors={{this.hexColors}} @onChange={{onChange}}/>`);
    click('[data-test-ember-color-swatch]');
  });
});
