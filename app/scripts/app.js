(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name trianglesApp
   * @description
   * # trianglesApp
   *
   * Main module of the application.
   */
  angular
    .module('trianglesApp', ['ngAnimate', 'ngAria', 'ngMessages', 'ngSanitize', 'ngTouch'])
    .constant('_', window._);
}());
