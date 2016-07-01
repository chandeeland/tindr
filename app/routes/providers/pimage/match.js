import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('providers.pimage').objectAt(0);
  },

  setupController: function(controller, model) {
    if (Math.floor((Math.random() * 100)) % 2 == 0) {
      controller.set('match', true);
    } else {
      controller.set('match', false);
    }
  }
  // model: function() {
  //   var providers = this.modelFor('providers');
  //   var current = this.controllerFor('providers').get('current')
  //   return this.store.find('provider', providers.objectAt(current).get('id'));
  // }
});
