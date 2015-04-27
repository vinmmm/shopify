'use strict';

/**
 * @ngdoc function
 * @name joeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the joeApp
 */
angular.module('joeApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });