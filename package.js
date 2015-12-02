/* global Package, Npm */
Package.describe({
  name: 'huaming:node-resque',
  version: '1.1.3',
  // Brief, one-line summary of the package.
  summary: 'This a wrap version for TaskRabit node-resque',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:raohuaming/meteor-node-resque.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'

});

Npm.depends({
  'node-resque': '1.1.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.1');
  api.export('NR', 'server');
  api.addFiles('meteor/resque.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('huaming:node-resque');
  api.addFiles('meteor/resque_tests.js', 'server');
});
