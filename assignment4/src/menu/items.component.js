(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menu/templates/items.template.html',
    bindings: {
      items: '<'
    }
  });
})();
