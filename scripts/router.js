;(function(angular) {

  'use strict';

  angular.module('Peddler').config(ConfigRouter);

  ConfigRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function ConfigRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $urlRouterProvider.otherwise('/signIn');

    $stateProvider
      .state('signIn', {
        url: '/signIn',
        templateUrl: 'views/SignIn.html',
        controller: 'AuthController',
        controllerAs: 'AuthCtrl',
        resolve: {
          isAuthenticated: function(Auth, $location, $timeout) {
            if (Auth.isAuthenticated()) {
              $timeout(function() {
                $location.path('/products');
              }, 100)
            }
          }
        }
      })
      .state('dashboard', {
        url: '/',
        abstract: true,
        templateUrl: 'views/Dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'DashboardCtrl',
        resolve: {
          isAuthenticated: function(Auth, $location, $timeout) {
            if (!Auth.isAuthenticated()) {
              $timeout(function() {
                $location.path('/signIn');
              },100)
            }
          }
        }
      })
      .state('dashboard.products', {
        url: 'products',
        views: {
          'dashboard': {
            templateUrl: 'views/ListProducts.html',
            controller: 'ListProductController',
            controllerAs: 'ListProductCtrl'
          }
        }
      })
      .state('dashboard.product', {
        url: 'product/:productID',
        views: {
          'dashboard': {
            templateUrl: 'views/Product.html',
            controller: 'ProductController',
            controllerAs: 'ProductCtrl'
          }
        }
      })
  }
})(angular);