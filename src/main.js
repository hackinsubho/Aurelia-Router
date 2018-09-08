import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .defaultBindingLanguage()
    .defaultResources()
    .developmentLogging()
    .router()
    .history()
    .eventAggregator()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  return aurelia.start().then(() => aurelia.setRoot());
}
