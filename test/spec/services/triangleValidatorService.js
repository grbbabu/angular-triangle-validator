(function() {
    'use strict';

  describe('Service: triangleValidatorService', function () {

    // load the controller's module
    beforeEach(module('trianglesApp'));

    var triangleValidatorService;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_triangleValidatorService_) {
      triangleValidatorService = _triangleValidatorService_;
    }));

    it('should return an error if less than three sides are input.', function () {
      var result = triangleValidatorService.validateTriangle(5, 1);
      expect(result.isValid).toBe(false);
      expect(result.type).toBe("Error");
      expect(result.message).toBe("Please enter numbers in input fields.");
    });

    it('should return an error if inputs are not numbers.', function () {
      var result = triangleValidatorService.validateTriangle("a", "b", 1);
      expect(result.isValid).toBe(false);
      expect(result.type).toBe("Error");
      expect(result.message).toBe("Please enter numbers in input fields.");
    });

    it('should return an error if any of the inputs are numbers less than 0.', function () {
      var result = triangleValidatorService.validateTriangle(-2, 5, 2);
      expect(result.isValid).toBe(false);
      expect(result.type).toBe("Error");
      expect(result.message).toBe("Please enter a number greater than 0.");
    });

    it('should return an error if any of the inputs is 0.', function () {
      var result = triangleValidatorService.validateTriangle(2, 0, 2);
      expect(result.isValid).toBe(false);
      expect(result.type).toBe("Error");
      expect(result.message).toBe("Please enter a number greater than 0.");
    });

    it('should return an error if the inputs cannot form a triangle.', function () {
      var result = triangleValidatorService.validateTriangle(5, 3, 8);
      expect(result.isValid).toBe(false);
      expect(result.type).toBe("Error");
      expect(result.message).toBe("The input sides cannot form a triangle.");
    });

    it('should return equilateral triangle if all the three sides are same.', function () {
      var result = triangleValidatorService.validateTriangle(2, 2, 2);
      expect(result.isValid).toBe(true);
      expect(result.type).toBe("Equilateral");
      expect(result.message).toBe("The given triangle is a equilateral triangle.");
    });

    it('should return isosceles triangle if any two sides are same.', function () {
      var result = triangleValidatorService.validateTriangle(2, 1, 2);
      expect(result.isValid).toBe(true);
      expect(result.type).toBe("Isosceles");
      expect(result.message).toBe("The given triangle is a isosceles triangle.");
    });

    it('should return scalene triangle if all the three sides are different.', function () {
      var result = triangleValidatorService.validateTriangle(3, 4, 5);
      expect(result.isValid).toBe(true);
      expect(result.type).toBe("Scalene");
      expect(result.message).toBe("The given triangle is a scalene triangle.");
    });
  });
}());
