!function(){"use strict";angular.module("trianglesApp",["ngAnimate","ngAria","ngMessages","ngSanitize","ngTouch"]).constant("_",window._)}(),function(){"use strict";var a=function(a){var b=function(a,b,c){return a+b>c&&b+c>a&&c+a>b?!0:!1},c={validateTriangle:function(c,d,e){var f={isValid:!1,type:"Error",message:""};return a.isFinite(c)&&a.isFinite(d)&&a.isFinite(e)?0>=c||0>=d||0>=e?(f.message="Please enter a number greater than 0.",f):b(c,d,e)?(f.isValid=!0,c===d&&d===e&&c===e?(f.type="Equilateral",f.message="The given triangle is a equilateral triangle.",f):c===d||d===e||c===e?(f.type="Isosceles",f.message="The given triangle is a isosceles triangle.",f):(f.type="Scalene",f.message="The given triangle is a scalene triangle.",f)):(f.message="The input sides cannot form a triangle.",f):(f.message="Please enter numbers in input fields.",f)}};return c};a.$inject=["_"],angular.module("trianglesApp").factory("triangleValidatorService",a)}(),function(){"use strict";angular.module("trianglesApp").controller("MainCtrl",["$scope","triangleValidatorService",function(a,b){a.validateTriangle=function(c,d,e){c=parseInt(c),d=parseInt(d),e=parseInt(e),a.validationResult=b.validateTriangle(c,d,e)}}])}(),angular.module("trianglesApp").run(["$templateCache",function(a){"use strict";a.put("views/main.html",'<div class="jumbotron"> <h1>Triangle Validator</h1> </div> <div class="row marketing"> <form> <div class="form-group"> <label for="side1">Length of first side</label> <input type="text" class="form-control" id="side1" data-ng-model="side1Length" placeholder="Side 1"> </div> <div class="form-group"> <label for="side2">Length of second side</label> <input type="text" class="form-control" id="side2" data-ng-model="side2Length" placeholder="Side 2"> </div> <div class="form-group"> <label for="side3">Length of third side</label> <input type="text" class="form-control" id="side3" data-ng-model="side3Length" placeholder="Side 3"> </div> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#validationModal" ng-click="validateTriangle(side1Length, side2Length, side3Length)">Know More</button> <!-- Modal --> <div class="modal fade" id="validationModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> <h4 class="modal-title" id="myModalLabel">Validation Results</h4> </div> <div class="modal-body"> <p data-ng-show="validationResult.isValid"> The triangle is a valid triangle. </p> <p data-ng-hide="validationResult.isValid"> The triangle is an invalid triangle. </p> <p data-ng-bind="validationResult.message"></p> </div> <div class="modal-footer"> <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button> </div> </div> </div> </div> </form> </div>')}]);