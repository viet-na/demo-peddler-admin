var expect = chai.expect;

describe('Auth Controller', function() {

  var _Controller, _Users, _Auth, _httpBackend, _scope;

  beforeEach(angular.mock.module('ui.router', 'ngCookies', 'ui.bootstrap', 'angular-ladda', 'ngStorage', 'Peddler'));

  beforeEach(angular.mock.inject(function($rootScope, $controller, Users, Auth, $httpBackend){
    _Users = Users;
    _Auth = Auth;
    _httpBackend = $httpBackend;
    _scope = $rootScope.$new();
    _Controller = $controller('AuthController', {$scope: _scope});
  }));

  describe('Check is defined', function() {
    it('ensure controller defined', function() {
      expect(_Controller).to.exist;
    })

    it('ensure Users service defined', function() {
      expect(_Users).to.exist;
    })

    it('ensure Auth factory defined', function() {
      expect(_Auth).to.exist;
    })
  })

  describe('Action SignIn', function() {
    it('ensure login success', function() {
      _Auth.revokeUser();
      _Controller.input.email = 'mr.nav90@gmail.com';
      _Controller.input.password = '123456';
      _httpBackend.whenGET(/views.*/).respond(200);
      _httpBackend.whenPOST('http://0.0.0.0:3000/api/Users/login').respond(200, {
        userId: "575f7910530962b40bbb8162"
      });
      _Controller.signIn({$valid: true});
      _httpBackend.flush();
      _httpBackend.verifyNoOutstandingExpectation();
      _httpBackend.verifyNoOutstandingRequest();
      expect(_Controller.messageError).to.be.null;
      expect(_Auth.getUser()).to.not.be.undefined;
      expect(_Auth.getUser().user.email).to.equal('mr.nav90@gmail.com');
    })

    it('ensure login failed', function() {
      _Controller.input.email = 'mr.nav90@gmail.com';
      _Controller.input.password = '111111';
      _httpBackend.whenGET(/views.*/).respond(200);
      _httpBackend.whenPOST('http://0.0.0.0:3000/api/Users/login').respond(401, {
        error: {
          code: "LOGIN_FAILED",
          status: 401
        }
      });
      _Controller.signIn({$valid: true});
      _httpBackend.flush();
      _httpBackend.verifyNoOutstandingExpectation();
      _httpBackend.verifyNoOutstandingRequest();
      expect(_Controller.messageError).to.equal('Sign in error, please try agian!');
    })
  })
})
