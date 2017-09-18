'use strict';

/**
 * @ngdoc overview
 * @name hopsworksWebApp
 * @description
 * # hopsworksWebApp
 *
 * Main module of the application.
 */
angular.module('hopsworksWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
