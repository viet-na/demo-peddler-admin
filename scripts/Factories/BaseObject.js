;(function(angular) {
  
  'use strict';

  angular.module('Peddler').factory('BaseObject', BaseObject);

  BaseObject.$inject = [];
  function BaseObject() {
    var BaseObject = function(object) {
      var self = this;
      self.getId = getId;
      self.setId = setId;
      self.get = get;
      self.set = set;
      self.getData = getData;
      self.setData = setData;
      self.data = !!object ? object : {};
      self.checked = false;

      if (!object) {
        object = {};
      }

      function getId() {
        return self.get('id');
      }

      function setId(id) {
        self.set('id', id);
      }

      function get(key) {
        if (!!self.data[key]) {
          return self.data[key];
        } else if (self.data[key] === false) {
          return false;
        } else {
          return null;
        }
      }

      function set(key, value) {
        self.data[key] = value;
      }

      function getData() {
        return self.data;
      }

      function setData() {
        self.data = data;
      }
    }

    return (BaseObject)
  }
  
})(angular);