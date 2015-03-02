'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('app', [
  // Plugins
  'hc.marked',
  'ngRoute',
  'ngFx',
  'ngAnimate',
  'gilbox.sparkScroll',
    'smoothScroll',

  // Home Controller
  'app.home.browser',
  'app.home.mobile',
  'app.home',

  // Directives
  'app.kuizu'
]);


App.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/Home', {
    templateUrl: 'Home/Home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise({redirectTo: '/Home'});
}]);

App.config(['markedProvider', function(markedProvider) {
  markedProvider.setOptions({
    gfm: true,
    tables: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
}]);

