'use strict';

/**
 * @ngdoc function
 * @name materialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the materialApp
 */
angular.module('materialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
