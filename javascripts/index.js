/**
 * Module dependencies.
 */

require('ng-sanitize');

exports = module.exports = Shoelace;

function Shoelace(app, options) {

  return app.directive('modalSelector', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        element.addClass('modal-selector');
        scope.select = function(item) {
          scope.modal.active = true;
          scope.modal.html = element.find('section').html();
          if (typeof item !== "object") return;
          angular.extend(scope.modal, scope.item)
        }
      }
    };
  })

};

