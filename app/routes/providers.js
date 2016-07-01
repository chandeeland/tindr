import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('provider', {zip_code: '10010', search_term: ''});
  }
});
