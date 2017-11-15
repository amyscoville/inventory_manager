(function(){
    angular
    .module('InventoryManager')
    .factory('Product', product);

    function product($http, ServerUrl) {

        var service = {
            list: list,
            grab: grab
        };

        return service;

        function list(){
            return $http.get(ServerUrl + '/product')
        }

        function grab(id) {
            return $http.get(ServerUrl + '/product/' + id);
        }
    }
})();