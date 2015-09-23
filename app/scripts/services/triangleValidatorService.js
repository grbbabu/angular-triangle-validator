(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name trianglesApp.service:triangleValidatorService
   * @description
   * # triangleValidatorService
   * Service which validates the inputs for a triangle.
   */
  var triangleValidatorService = function(_) {
    var validateSideValues = function(a, b, c) {
      // Sum of any two sides should be more than the third side.
      if ( (a+b > c) && (b+c > a) && (c+a > b)){
        return true;
      }
      return false;
    };

    var service = {
      validateTriangle: function(a, b, c) {
        var result = {
          isValid: false,
          type: 'Error',
          message: ''
        };

        if(!_.isFinite(a) || !_.isFinite(b) || !_.isFinite(c)){
          result.message = "Please enter numbers in input fields.";
          return result;
        }

        if (a <= 0 || b <= 0 || c <= 0) {
          result.message = "Please enter a number greater than 0.";
          return result;
        }

        if (!validateSideValues(a,b,c)) {
          result.message = "The input sides cannot form a triangle.";
          return result;
        }

        result.isValid = true;

        if (a === b && b === c && a === c) {
          result.type = 'Equilateral';
          result.message = "The given triangle is a equilateral triangle.";
          return result;
        }

        if (a === b || b === c || a === c) {
          result.type = 'Isosceles';
          result.message = "The given triangle is a isosceles triangle.";
          return result;
        }

        result.type = 'Scalene';
        result.message = "The given triangle is a scalene triangle.";
        return result;
      }
    };
    return service;
  };

  triangleValidatorService.$inject = ['_'];

  angular.module('trianglesApp')
    .factory('triangleValidatorService', triangleValidatorService);
}());
