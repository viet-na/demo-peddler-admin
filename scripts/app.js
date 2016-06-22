;(function(angular) {

  'use strict';

  angular.module('Peddler', [
    'ui.router',
    'ngCookies',
    'ui.bootstrap',
    'angular-ladda',
    'ngStorage'
  ]).run(Application).config(Config)

  Application.$inject = ['$rootScope', '$localStorage'];
  function Application($rootScope, $localStorage) {
    $localStorage.currentPage = 1;
    $localStorage.currentOffset = 0;
  }

  Config.$inject = ['laddaProvider'];
  function Config(laddaProvider) {
    laddaProvider.setOption({
      style: 'zoom-out'
    });
  }

})(angular);