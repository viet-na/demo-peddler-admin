var expect = chai.expect;

describe('List Product Controller', function() {

  var _Controller, _Products, _Product, _httpBackend, _scope, _localStorage;

  beforeEach(angular.mock.module('ui.router', 'ngCookies', 'ui.bootstrap', 'angular-ladda', 'ngStorage', 'Peddler'));

  beforeEach(angular.mock.inject(function($rootScope, $controller, $localStorage, Products, Product, $httpBackend){
    _Products = Products;
    _Product = Product;
    _httpBackend = $httpBackend;
    _localStorage = $localStorage;
    _scope = $rootScope.$new();
    _Controller = $controller('ListProductController', {$scope: _scope});
  }));

  describe('Check is defined', function() {
    it('ensure Controller defined', function() {
      expect(_Controller).to.exist;
    })

    it('ensure Products service defined', function() {
      expect(_Products).to.exist;
    })

    it('ensure Product factory defined', function() {
      expect(_Product).to.exist;
    })
  })

  describe('Get list product', function() {

  })

});
