import Ember from 'ember';

export default Ember.Controller.extend({

  providers: Ember.inject.controller('providers'),

  imageUrl: null,

  current: Ember.computed('providers.current', function() {
    return this.get('providers.current');
  }),

  watchImageUrl: Ember.observer('providers.current', function() {
    var providers = this.get('model');
    var provider = providers.objectAt(this.get('current'));
    var params = {
      q: 'Doctor ' + provider.get('presentationName'),
      count:'1',
      offset:'0',
      mkt:'en-us',
      safeSearch:'Moderate'
    };

    var url = 'https://api.cognitive.microsoft.com/bing/v5.0/images/search'

    return Ember.$.ajax({
      url: url,
      data: params,
      type: 'GET',
      beforeSend: function(xhr){
        xhr.setRequestHeader(
          'Ocp-Apim-Subscription-Key',
          '32d831ed5c814fd5afa9e4dbfd8e09b9'
        );
      },
    })
    .then(
    function(result) {
      this.set('imageUrl', result.value[0].contentUrl);
    }.bind(this));
  }),

  actions: {
    left: function() {
      var current = this.get('providers.current') + 1;
      this.get('providers').set('current', current)
      // var go = '/providers';
      // this.transitionToRoute(go)
    },
    right: function() {
      this.i/transitionToRoute('/providers/match');
    }
  }
});
