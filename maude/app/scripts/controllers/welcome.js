'use strict';

/**
 * @ngdoc function
 * @name joeApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the joeApp
 */
angular.module('joeApp')
  .controller('WelcomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
