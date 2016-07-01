import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    go: function() {
      this.transitionToRoute('/providers/i');
    }
  }
});
