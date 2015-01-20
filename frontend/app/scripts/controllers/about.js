'use strict';

/**
 * @ngdoc function
 * @name materialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the materialApp
 */
angular.module('materialApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
