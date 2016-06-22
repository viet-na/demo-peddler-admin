;(function(angular) {

  'use strict';

  angular.module('Peddler').factory('User', User);

  User.$inject = ['BaseObject'];
  function User(BaseObject) {
    var User = function(object) {
      var self = angular.extend(this, new BaseObject(object));
      self.getUsername = getUsername;
      self.getDisplayname = getDisplayname;
      self.getEmail = getEmail;
      self.getCreated = getCreated;
      self.getAvatar = getAvatar;

      function getUsername() {
        return self.get('username')
      }

      function getDisplayname() {
        return self.get('displayname')
      }

      function getEmail() {
        return self.get('email')
      }

      function getCreated() {
        return self.get('created')
      }

      function getAvatar() {
        return self.get('avatar')
      }

    }

    return (User)
  }

})(angular);