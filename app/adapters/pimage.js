import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  headers: {
    'Ocp-Apim-Subscription-Key': '32d831ed5c814fd5afa9e4dbfd8e09b9'
  },
  host: 'https://api.cognitive.microsoft.com/',
  namespace: 'bing/v5.0/images/',

  pathForType: function(type) {
    return 'search';
  }
});
