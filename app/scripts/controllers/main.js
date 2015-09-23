(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name trianglesApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the trianglesApp
   */
  angular.module('trianglesApp')
    .controller('MainCtrl', ['$scope', 'triangleValidatorService', function ($scope, triangleValidatorService) {

      $scope.validateTriangle = function(side1, side2, side3) {
        side1 = parseInt(side1);
        side2 = parseInt(side2);
        side3 = parseInt(side3);
        $scope.validationResult = triangleValidatorService.validateTriangle(side1, side2, side3);
      };
    }]);
}());
