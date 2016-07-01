import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // var providers = this.modelFor('providers');
    // var model =  providers.objectAt(params.current);
    // var search_string ='Doctor ' + model.get('presentationName');
    var images = this.store.query('pimage', {
      q: 'dog',
      count:'1',
      offset:'0',
      mkt:'en-us',
      safeSearch:'Moderate'
    });

    console.log(images)
debugger

    return images;
  },

});
