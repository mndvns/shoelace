
window.dom = require('dom');
window.query = require('query');


// module.exports = function(app) {
//   console.log('!!!!!!!!!!!!!!!!!', app);
//   app.directive('zzz', function() {
//       return {
//         template: '<h1>zoxcijzoicxj</h1>'
//       };
//     });
// };
// 

exports = module.exports = Shoelace;

function Shoelace(app) {
  if (!(this instanceof Shoelace)) return new Shoelace(app);
  return window.shoelace = this;
}

// Shoelace.prototype = {
//   toggle: function(id) {
//     window.el = document.getElementById(id);
//     el.className = el.className === "on"
//       ? "off"
//       : "on";
//   }
// };
