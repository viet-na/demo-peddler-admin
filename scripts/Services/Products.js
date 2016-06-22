;(function(angular) {

  'use strict';

  angular.module('Peddler').service('Products', Products);

  Products.$inject = ['$q', '$http', 'serverUrl', 'Auth'];
  function Products($q, $http, serverUrl, Auth) {
    var Products = function() {
      var self = this;
      self.list = list;
      self.get = get;
      self.count = count;
      self.sort = sort;

      function count(params) {
        var deferred = $q.defer();
        var requestParams = {
          url: serverUrl + 'Products/count',
          method: 'GET'
        }
        if (params) {
          requestParams.params = params;
        }
        $http(requestParams).success(function(response) {
          deferred.resolve(response);
        }).error(function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }

      function sort(field, type, params) {
        var order = {
          'filter[order]': field + ' ' + type.toUpperCase()
        }
        return !!params ? list(angular.extend(order,params)) : list(order);
      }

      function list(params) {
        var deferred = $q.defer();
        var requestParams = {
          url: serverUrl + 'Products',
          method: 'GET',
          params: params
        }
        $http(requestParams).success(function(response) {
          deferred.resolve(response);
        }).error(function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }

      function get(id) {
        var deferred = $q.defer();
        var requestParams = {
          url: serverUrl + 'Products/'+id,
          method: 'GET'
        }
        $http(requestParams).success(function(response) {
          deferred.resolve(response);
        }).error(function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }

    }

    return new (Products)
  }

})(angular);