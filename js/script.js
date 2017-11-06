var app;

app = angular.module('app', ['ngRoute']);

app.config([
  '$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {}, $routeProvider.when("/home", {
    templateUrl: "/templates/home.tpl.html"
  }), $routeProvider.when("/about", {
    templateUrl: "/templates/about.tpl.html"
  }), $locationProvider.html5Mode(true)
]);
