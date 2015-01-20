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

        $scope.getCountries();

      }, 1);


      $scope.getCountries = function()
      {
        var getCountriesMethod = Restangular.all('country/show');

        getCountriesMethod.post().then(function (response) {

          $scope.countries = response.body;
        });
      };

  });
