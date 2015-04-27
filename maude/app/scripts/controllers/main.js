'use strict';

/**
 * @ngdoc function
 * @name joeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the joeApp
 */
angular.module('joeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
