(function() {
  'use strict';

  describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('trianglesApp'));

    var MainCtrl, scope;

    var triangleValidatorServiceMock = {
      validateTriangle: function() {
      }
    };

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope,
        triangleValidatorService: triangleValidatorServiceMock
      });
    }));

    it('should convert string inputs to numbers before invoking validator service.', function () {
      spyOn(triangleValidatorServiceMock, 'validateTriangle').and.callThrough();
      scope.validateTriangle("1", "2", "3");
      expect(triangleValidatorServiceMock.validateTriangle).toHaveBeenCalledWith(1,2,3);
    });
  });
}());
