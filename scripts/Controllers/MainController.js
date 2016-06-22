;(function(angular) {

  'use strict';

  angular.module('Peddler').controller('MainController', MainController);

  MainController.$inject = ['$state'];
  function MainController($state) {
    var self = this;
    self.bodyClass = bodyClass;

    function bodyClass() {
      switch ($state.current.name) {
        case 'signIn':
          return 'login-page';
        case 'dashboard':
        case 'dashboard.product':
        case 'dashboard.products':
          return 'skin-blue sidebar-mini';
        default:
          return '';
      }
    }
  }

})(angular);