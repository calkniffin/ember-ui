import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orgs', {}); //   /orgs
  this.route('org', {path: 'org/:id'}, function() { //   /org/emberjs
    this.route('repos');
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors');
      this.route('issues');
    });
  });
  this.route('notfound', {path: '*path'});
});

export default Router;
