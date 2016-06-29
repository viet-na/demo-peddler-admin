;(function(angular) {

  'use strict';

  angular.module('Peddler').controller('DashboardController', DashboardController);

  DashboardController.$inject = ['User', 'Users', 'Auth', '$timeout', '$state', '$localStorage'];
  function DashboardController(User, Users, Auth, $timeout, $state, $localStorage) {
    var self = this;
    self.userInfo = null;
    self.getUserProfile = getUserProfile;
    self.signOut = signOut;
    self.resetList = resetList;

    getUserProfile();

    function getUserProfile() {
      if (angular.isDefined(Auth.getUser())) {
        Users.get(Auth.getUser().token.userId).then(function(response) {
          if (!response.error) {
            self.userInfo = new User(response);
          }
        });
      }
    }

    function signOut() {
      Users.SignOut().then(function(response) {
      	Auth.revokeUser();
        $timeout(function() {
          $state.go('signIn');
        })
      });
    }

    function resetList() {
      $localStorage.currentPage = 1;
      $localStorage.currentOffset = 0;
    }

  }

})(angular);
