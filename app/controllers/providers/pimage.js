import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'providers',

  actions: {
    left: function() {
      current = this.get('controllers.providers.current') + 1;
      this.set(controllers.providers.current, current)
      var go = '/providers/pimage/' current;
      this.transitionToRoute(go)
    },
    right: function() { this.transitionToRoute('/providers/pimage/4')}
  }
});
