(function(){
    angular
    .module('InventoryManager')
    .factory('Orders', orders);

    function orders($http, ServerUrl) {

        var service = {
            getOrderHistory: getOrderHistory
        };

        return service;

        function getOrderHistory(userId){
            return $http.get(ServerUrl + '/user/' + userId + '/orders');
        }
    }
})();