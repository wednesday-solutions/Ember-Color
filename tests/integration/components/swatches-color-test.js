import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { red } from '../color';

module('Integration | Component | swatches-color', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the color passed to it correctly', async function(assert) {
    this.set('hexColor', red.hex);
    await render(hbs`<SwatchesColor @hexColor={{this.hexColor}} />`);
    assert.equal(find('[data-test-ember-color-swatch]').style.backgroundColor, 'rgb(255, 0, 0)');
  });

  test('it renders the check icon when active is set to true', async function(assert) {
    this.set('hexColor', red.hex);
    this.set('active', true);
    await render(hbs`<SwatchesColor @active={{this.active}} @hexColor={{this.hexColor}} />`);
    assert.ok(find('[data-test-ember-color-check]'));
  });

  test('it renders the check icon as black if color is set to white', async function(assert) {
    this.set('hexColor', '#FFFFFF');
    this.set('active', true);
    await render(hbs`<SwatchesColor @active={{this.active}} @hexColor={{this.hexColor}} />`);
    assert.ok(find('[data-test-ember-color-check]').src.includes('ic_check_black.svg'))
  });

  test('it gives a callback when the swatch color is selected', async function(assert) {
    this.set('hexColor', '#FFFFFF');
    this.set('onClick', (color) => {
      assert.equal(color, '#FFFFFF');
    });
    await render(hbs`<SwatchesColor @onClick={{this.onClick}} @hexColor={{this.hexColor}} />`);
    await click('[data-test-ember-color-swatch]');
  })
});
