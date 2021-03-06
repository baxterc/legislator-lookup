import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees');
  this.route('subcommittees', {path: '/subcommittees/:committee_id'});
  this.route('bills');
  this.route('candidates');
});

export default Router;
