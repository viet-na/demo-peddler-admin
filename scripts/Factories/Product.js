;(function(angular) {

  'use strict';

  angular.module('Peddler').factory('Product', Product);

  Product.$inject = ['BaseObject'];
  function Product(BaseObject) {
    var Product = function(object) {
      var self = angular.extend(this, new BaseObject(object));
      self.getName = getName;
      self.getDescription = getDescription;
      self.getPrice = getPrice;
      self.getCreated = getCreated;

      function getName() {
        return self.get('name')
      }

      function getDescription() {
        return self.get('description')
      }

      function getPrice() {
        return self.get('price')
      }

      function getCreated() {
        return self.get('created')
      }
    }

    return (Product)
  }

})(angular);