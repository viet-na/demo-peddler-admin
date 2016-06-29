;(function(angular) {

  'use strict';

  angular.module('Peddler').service('Users', Users);

  Users.$inject = ['$q', '$http', 'serverUrl', 'Auth', '$timeout'];
  function Users($q, $http, serverUrl, Auth, $timeout) {
    var Users = function() {
      var self = this;
      self.SignIn = SignIn;
      self.SignOut = SignOut;
      self.get = get;

      function SignIn(params) {
        var deferred = $q.defer();
        var requestParams = {
          url: serverUrl + 'Users/login',
          method: 'POST',
          data: params
        }
        $http(requestParams).success(function(response) {
          deferred.resolve(response);
        }).error(function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }

      function SignOut() {
        var deferred = $q.defer();
        var requestParams = {
          url: serverUrl + 'Users/logout?access_token='+Auth.getUser().token.id,
          method: 'POST',
        }
        $http(requestParams).success(function(response) {
          deferred.resolve(response);
        }).error(function(error, status) {
          deferred.reject(error);
        });
        return deferred.promise;
      }

      function get(id) {
        var deferred = $q.defer();
        var requestParams = {
          url: serverUrl + 'Users/'+id,
          method: 'GET',
          params: {
            access_token: Auth.getUser().token.id
          }
        }
        $http(requestParams).success(function(response) {
          deferred.resolve(response);
        }).error(function(error, status) {
          deferred.reject(error);
        });
        return deferred.promise;
      }

    }

    return new (Users)
  }

})(angular);
