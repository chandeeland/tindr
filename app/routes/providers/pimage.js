import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.modelFor('providers');
  }

  // model: function(params) {
  //   var current = this.controllerFor('providers').get('current') || 0;
  //   var providers = this.modelFor('providers');
  //   var provider = providers.objectAt(current);
  //   var params = {
  //     q: 'Doctor ' + provider.get('presentationName'),
  //     count:'1',
  //     offset:'0',
  //     mkt:'en-us',
  //     safeSearch:'Moderate'
  //   };

  //   var url = 'https://api.cognitive.microsoft.com/bing/v5.0/images/search'

  //   return Ember.$.ajax({
  //     url: url,
  //     data: params,
  //     type: 'GET',
  //     beforeSend: function(xhr){
  //       xhr.setRequestHeader(
  //         'Ocp-Apim-Subscription-Key',
  //         '32d831ed5c814fd5afa9e4dbfd8e09b9'
  //       );
  //     },
  //   });
  // },

  // setupController: function(controller, model) {
  //   controller.set('imageUrl', model.value[0].contentUrl );
  // }
});
