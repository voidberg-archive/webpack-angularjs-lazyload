var fooController = require('./foo.controller.js');

require('./foo.scss');

var mod = angular.module('foo', []);

mod.controller('FooController', ['$scope', fooController]);

module.exports = mod;