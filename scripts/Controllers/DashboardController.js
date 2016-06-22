;(function(angular) {

  'use strict';

  angular.module('Peddler').controller('DashboardController', DashboardController);

  DashboardController.$inject = ['User', 'Users', 'Auth', '$timeout', '$state'];
  function DashboardController(User, Users, Auth, $timeout, $state) {
    var self = this;
    self.userInfo = null;
    self.getUserProfile = getUserProfile;
    self.signOut = signOut;

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
    
  }

})(angular);