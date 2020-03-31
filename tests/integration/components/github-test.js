import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, find, findAll, render } from '@ember/test-helpers';
import { red } from '../color';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | github', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the default colors correctly', async function(assert) {
    await render(hbs`<Github/>`);

    let swatches = findAll('[data-test-ember-color-swatch]');
    assert.equal(swatches[0].style.backgroundColor, 'rgb(184, 0, 0)');
    assert.equal(swatches[1].style.backgroundColor, 'rgb(219, 62, 0)');
    assert.equal(swatches[2].style.backgroundColor, 'rgb(252, 203, 0)');
    assert.equal(swatches[3].style.backgroundColor, 'rgb(0, 139, 2)');
    assert.equal(swatches[4].style.backgroundColor, 'rgb(0, 107, 118)');
    assert.equal(swatches[5].style.backgroundColor, 'rgb(18, 115, 222)');
    assert.equal(swatches[6].style.backgroundColor, 'rgb(0, 77, 207)');
    assert.equal(swatches[7].style.backgroundColor, 'rgb(83, 0, 235)');
    assert.equal(swatches[8].style.backgroundColor, 'rgb(235, 150, 148)');
    assert.equal(swatches[9].style.backgroundColor, 'rgb(250, 208, 195)');
    assert.equal(swatches[10].style.backgroundColor, 'rgb(254, 243, 189)');
    assert.equal(swatches[11].style.backgroundColor, 'rgb(193, 225, 197)');
    assert.equal(swatches[12].style.backgroundColor, 'rgb(190, 218, 220)');
    assert.equal(swatches[13].style.backgroundColor, 'rgb(196, 222, 246)');
    assert.equal(swatches[14].style.backgroundColor, 'rgb(190, 211, 243)');
    assert.equal(swatches[15].style.backgroundColor, 'rgb(212, 196, 251)');
  });

  test('it renders the colors passed to it correctly', async function(assert) {
    this.set('colors', [red.hex]);
    await render(hbs`<Github @colors={{this.colors}}/>`);
    assert.equal(find('[data-test-ember-color-swatch]').style.backgroundColor, 'rgb(255, 0, 0)');
  });

  test('it hides the triangle if hideTriangle is set to true', async function(assert) {
    this.set('hideTriangle', true);
    await render(hbs`<Github @hideTriangle={{this.hideTriangle}}/>`);
    assert.notOk(find('[data-test-ember-github-triangle]'));
  });

  test('it gives a callback when the user selects a color', async function(assert) {
    this.set('onChange', (color) => {
      assert.equal(color.hex, '#b80000');
    });
    await render(hbs`<Github @onChange={{this.onChange}}/>`);
    await click('[data-test-ember-color-swatch]');
  });
});
