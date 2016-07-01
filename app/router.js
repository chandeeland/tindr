import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('providers', {path: '/providers'}, function() {
    this.route('pimage', {path: '/i'}, function() {
      this.route('match', {path: '/match'});
    });
  });

  this.route('home', {
    path: '/'
  });
});

export default Router;
