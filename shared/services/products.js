(function(){
    angular
    .module('InventoryManager')
    .factory('Product', products);

    function products($http, ServerUrl) {

        var service = {
            list: list
        };

        return service;

        function list(){
            return $http.get(ServerUrl + '/product');
        }
    }
})();