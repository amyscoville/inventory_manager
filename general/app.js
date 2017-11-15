(function(){
    angular.module('InventoryManager', ['ui.router', 'ngStorage', 'oitozero.ngSweetAlert'])
    
    .run(function($rootScope, $state){
        $rootScope.$state = $state;
        $rootScope.$on('$stateChangeError', 
        function(event, toState, toParams, fromState, fromParams, error){ console.log(error); });
    })
    .constant('ServerUrl', 'http://wta-inventorybackend.herokuapp.com/api/v1');
})();

