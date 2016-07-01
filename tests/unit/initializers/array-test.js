import Ember from 'ember';
import ArrayInitializer from 'tin-dr/initializers/array';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | array', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ArrayInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
