;(function(angular) {

  'use strict';

  angular.module('Peddler').controller('ProductController', ProductController);

  ProductController.$inject = ['Product', 'Products', '$stateParams', '$state'];
  function ProductController(Product, Products, $stateParams, $state) {
    var self = this;
    self.product = null;

    getProduct();
    
    function getProduct() {
      if ($stateParams.productID) {
        Products.get($stateParams.productID).then(function(response) {
          if (!response.error) {
            self.product = new Product(response);
          }
        }, function(error) {
          
        })
      } else {
        $state.go('dashboard.products')
      }
    }
    
  }

})(angular);