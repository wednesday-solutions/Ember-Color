import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, find, findAll, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | swatches-group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders all the colors in a group', async function(assert) {
    this.set('hexColorGroup', ["#FFFFFF", '#000000', '#FF0000']);
    await render(hbs`<SwatchesGroup @hexColorGroup={{this.hexColorGroup}} />`);

    let swatches = findAll('[data-test-ember-color-swatch]');
    assert.equal(swatches[0].style.backgroundColor, 'rgb(255, 255, 255)');
    assert.equal(swatches[1].style.backgroundColor, 'rgb(0, 0, 0)');
    assert.equal(swatches[2].style.backgroundColor, 'rgb(255, 0, 0)');
  });

  test('it should give a callback when a color is selected in a group', async function(assert) {
    this.set('hexColorGroup', ["#FFFFFF", '#000000', '#FF0000']);
    this.set('onClick', (color) => {
      assert.equal(color, '#FFFFFF');
    });
    await render(hbs`<SwatchesGroup @onClick={{this.onClick}} @hexColorGroup={{this.hexColorGroup}} />`);
    await click('[data-test-ember-color-swatch]');
  });

  test('it should set the active color in a group', async function(assert) {
    this.set('hexColorGroup', ["#FFFFFF", '#000000', '#FF0000']);
    this.set('activeColor', '#FFFFFF');
    await render(hbs`<SwatchesGroup @activeColor={{this.activeColor}} @hexColorGroup={{this.hexColorGroup}} />`);
    assert.ok(find('[data-test-ember-color-check]'));
  });
});
