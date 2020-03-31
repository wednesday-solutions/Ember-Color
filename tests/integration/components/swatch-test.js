import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click, triggerEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { red } from '../color';

module('Integration | Component | swatch', function(hooks) {
  setupRenderingTest(hooks);

  test('it should give a callback when the user selects a swatch', async function(assert) {
    this.set('onClick', (color) => {
      assert.equal(color, red.hex);
    });
    this.set('hexColor', red.hex);
    await render(hbs`<Swatch @hexColor={{hexColor}} @onClick={{onClick}}/>`);
    await click('[data-test-ember-color-swatch]');
  });

  test('it should give a callback when the user hovers over a swatch', async function(assert) {
    this.set('onHover', (color) => {
      assert.equal(color, red.hex);
    });
    this.set('hexColor', red.hex);
    await render(hbs`<Swatch @hexColor={{hexColor}} @onHover={{onHover}}/>`);
    await triggerEvent('[data-test-ember-color-swatch]', 'mouseover');
  });

  test('it should render the color correctly', async function(assert) {
    this.set('hexColor', red.hex);
    await render(hbs`<Swatch @hexColor={{hexColor}}/>`);
    assert.equal(find('[data-test-ember-color-swatch]').style.backgroundColor, 'rgb(255, 0, 0)');
  });

  test('it should render the box shadow that is passed to the swatch', async function(assert) {
    this.set('hexColor', 'transparent');
    this.set('boxShadow', 'inset 0 0 0 15px #ff0000');
    await render(hbs`<Swatch @hexColor={{hexColor}} @boxShadow={{boxShadow}}/>`);
    assert.equal(find('[data-test-ember-color-swatch]').style.boxShadow, 'rgb(255, 0, 0) 0px 0px 0px 15px inset');
  });
});
