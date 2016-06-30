import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  headers: {
    'Vericred-Api-Key': '152193511ff942586e9d345fb5617bba',
    'Accept-Version': 'v3'
  },
  host: 'https://api.vericred.com'
});
