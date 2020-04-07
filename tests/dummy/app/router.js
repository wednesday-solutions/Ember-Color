import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    this.route('alpha');
    this.route('block');
    this.route('circle');
    this.route('compact');
    this.route('github');
    this.route('hue');
    this.route('material');
    this.route('sketch');
    this.route('slider-swatches');
    this.route('swatch');
    this.route('swatches');
    this.route('twitter');
  });
});

export default Router;
