/**
 * Module dependencies.
 */

var package = require('../package');


/**
 * modal-selector
 */

package.directive('modalSelector', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      element.addClass('modal-selector');
      scope.modalOpen = function(item) {
        var item = $parse(attr.modalSelector)(scope);
        scope.modal.active = true;
        angular.extend(scope.modal, item);
      }
    }
  };
});
