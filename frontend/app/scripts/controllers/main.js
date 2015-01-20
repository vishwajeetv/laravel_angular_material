'use strict';

/**
 * @ngdoc function
 * @name materialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the materialApp
 */
angular.module('materialApp')
  .controller('MainCtrl', function ($scope, Restangular, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $scope.countries =  null;

      $timeout(function () {

        $scope.getUsers();

      }, 1);


      $scope.getUsers = function()
      {
        var getUsersMethod = Restangular.all('sample/show');

        getUsersMethod.post().then(function (response) {

            $scope.users = response[0];
        });
      };

  });
