/**
 * Developed by Farhang Darzi
 */

stbApp.controller('bodyController', [
  '$scope',
  '$document',
  '$state',
  '$rootScope',
  'hotkeys',
  function ($scope, $document, $state, $rootScope, hotkeys) {

    // for global keypressed
    hotkeys.add({
      combo: 'ctrl+up',
      description: 'This one goes to 11',
      callback: function() {
        console.log('ctrl and up pressed');
      }
    });

    // for relative keypressed
    hotkeys.bindTo($scope).add({
      combo: 'enter',
      description: 'This one goes to 11',
      callback: function() {
        console.log('enter btn pressed');
        $state.go("stb.channel");
      }
    });

  }]);