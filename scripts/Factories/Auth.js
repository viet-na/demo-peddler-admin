;(function(angular) {

  'use strict';

  angular.module('Peddler').factory('Auth', Auth);

  Auth.$inject = ['$localStorage'];
  function Auth($localStorage) {
    var Auth = function() {
      var self = this;
      self.setUser = setUser;
      self.getUser = getUser;
      self.revokeUser = revokeUser;
      self.isAuthenticated = isAuthenticated;

      function setUser(userInfo) {
        $localStorage.userInfo = userInfo;
      }

      function getUser() {
        return $localStorage.userInfo;
      }

      function revokeUser() {
        delete $localStorage.userInfo;
      }

      function isAuthenticated() {
        return angular.isDefined($localStorage.userInfo) && $localStorage.userInfo !== null;
      }
    }

    return new (Auth)
  }

})(angular);