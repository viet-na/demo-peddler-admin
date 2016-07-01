;(function(angular) {

  'use strict';

  angular.module('Peddler').controller('ListProductController', ListProductController);

  ListProductController.$inject = ['Product', 'Products', '$localStorage', '$state'];
  function ListProductController(Product, Products, $localStorage, $state) {
    var self = this;
    self.page = angular.isDefined($localStorage.currentPage) && $localStorage.currentPage > 1 ? $localStorage.currentPage : 1;
    self.offset = angular.isDefined($localStorage.currentOffset) && $localStorage.currentOffset > 0 ? $localStorage.currentOffset : 0;
    self.total = 0;
    self.limit = 10;
    self.listProducts = [];
    self.loading = false;
    self.isSort = false;
    self.sortField = null;
    self.sortType = 'desc';
    self.toggleSort = toggleSort;
    self.pageChange = pageChange;
    self.showProduct = showProduct;
    self.getList = getList;
    self.init = init;
    self.getCount = getCount;

    function init() {
      getCount(function() {
        getList();
      })
    }

    function getCount(callback) {
      Products.count().then(function(response) {
        self.total = response.count;
        if (typeof callback == 'function') callback()
      });
    }

    function getList() {
      self.loading = true;
      var params = {
        'filter[limit]': self.limit,
        'filter[offset]': self.offset
      }
      Products.list(params).then(function(response) {
        if (!response.error) {
          self.listProducts = [];
          angular.forEach(response, function(value, key) {
            var product = new Product(value);
            self.listProducts.push(product);
          })
        }
        self.loading = false;
      }, function(error) {
        self.loading = false;
      })
    }

    function sortList(field, type) {
      self.loading = true;
      var params = {
        'filter[limit]': self.limit,
        'filter[offset]': self.offset
      }
      Products.sort(field, type, params).then(function(response) {
        if (!response.error) {
          self.listProducts = [];
          angular.forEach(response, function(value, key) {
            var product = new Product(value);
            self.listProducts.push(product);
          })
        }
        self.loading = false;
      }, function(error) {
        self.loading = false;
      })
    }

    function toggleSort(field) {
      self.sortField = field;
      self.isSort = !self.isSort;
      if (self.isSort) {
        self.sortType = 'asc';
      } else {
        self.sortType = 'desc';
      }
      sortList(self.sortField, self.sortType);
    }

    function showProduct(id) {
      $localStorage.currentPage = self.page;
      $localStorage.currentOffset = self.offset;
      $state.go('dashboard.product', {productID: id})
    }

    function pageChange() {
      self.offset = (self.page - 1) * self.limit;
      if (self.isSort) {
        sortList(self.sortField, self.sortType);
      } else {
        init();
      }
    }

  }

})(angular);
