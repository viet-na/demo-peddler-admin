;(function(angular) {

  'use strict';

  angular.module('Peddler').controller('AuthController', AuthController);

  AuthController.$inject = ['Users', 'Auth', '$state'];

  function AuthController(Users, Auth, $state) {
    var self = this;
    self.loading = false;
    self.messageError = null;
    self.signIn = signIn;
    self.hideError = hideError;
    self.input = {
      email: null,
      password: null
    }

    function signIn(loginForm) {
      if (loginForm.$valid) {
        self.loading = true;
        Users.SignIn(self.input).then(function(response) {
          if (!response.error) {
            Auth.setUser({
              user: self.input,
              token: response
            })
            $state.go('dashboard.products');
          } else {
            self.messageError = 'Sign in error, please try agian!';
          }
          self.loading = false;
        }, function(error) {
          self.loading = false;
          self.messageError = 'Sign in error, please try agian!';
        });
      } else {
        self.messageError = 'Please fill the form!';
      }
    }

    function hideError() {
      self.messageError = null;
    }
  }

})(angular);
