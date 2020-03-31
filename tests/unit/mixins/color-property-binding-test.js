import EmberObject from '@ember/object';
import ColorPropertyBindingMixin from 'ember-color/mixins/color-property-binding';
import { module, test } from 'qunit';

module('Unit | Mixin | color-property-binding', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ColorPropertyBindingObject = EmberObject.extend(ColorPropertyBindingMixin);
    let subject = ColorPropertyBindingObject.create();
    assert.ok(subject);
  });
});
