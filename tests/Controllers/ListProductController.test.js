var expect = chai.expect;

describe('List Product Controller', function() {

  var _Controller, _Products, _Product, _httpBackend, _scope, _localStorage, _serverUrl;

  beforeEach(angular.mock.module('ui.router', 'ngCookies', 'ui.bootstrap', 'angular-ladda', 'ngStorage', 'Peddler'));

  beforeEach(angular.mock.inject(function($rootScope, $controller, $localStorage, Products, Product, $httpBackend, serverUrl){
    _Products = Products;
    _Product = Product;
    _httpBackend = $httpBackend;
    _localStorage = $localStorage;
    _serverUrl = serverUrl;
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
    beforeEach(function() {
      _httpBackend.whenGET(/views.*/).respond(200);
    })

    afterEach(function() {
      _httpBackend.verifyNoOutstandingExpectation();
      _httpBackend.verifyNoOutstandingRequest();
    })

    it('ensure total item equal 20', function() {
      _httpBackend.whenGET(_serverUrl+'Products/count').respond(200, {count: 20})
      _Controller.getCount();
      _httpBackend.flush();
      expect(_Controller.total).to.be.equal(20);
    })

    it('ensure list product not empty', function() {
      _httpBackend.whenGET(_serverUrl+'Products?filter%5Blimit%5D=10&filter%5Boffset%5D=0').respond(200, listProducts);
      _Controller.getList();
      _httpBackend.flush();
      expect(_Controller.listProducts).to.not.be.empty;
    })

    it('ensure format product api', function() {
      _httpBackend.whenGET(_serverUrl+'Products?filter%5Blimit%5D=10&filter%5Boffset%5D=0').respond(200, listProducts);
      _Controller.getList();
      _httpBackend.flush();
      var data = _Controller.listProducts[0].getData()
      expect(data.name).to.exist;
      expect(data.description).to.exist;
      expect(data.price).to.exist;
      expect(data.created).to.exist;
      expect(data.id).to.exist;
    })

    it('ensure pagination of product is work', function() {
      _Controller.page = 2;
      _httpBackend.whenGET(_serverUrl+'Products/count').respond(200, {count: 20})
      _httpBackend.whenGET(_serverUrl+'Products?filter%5Blimit%5D=10&filter%5Boffset%5D=10').respond(200, pagination);
      _Controller.pageChange();
      _httpBackend.flush();
      var data = _Controller.listProducts[0];
      expect(_Controller.listProducts).to.not.be.empty;
      expect(data.getId()).to.be.equal('5760e012cbabfaab038f1e95');
    })
  })

});
