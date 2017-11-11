(function(){
    angular
    .module('InventoryManager')
    .factory('Product', product);

    function product($http, ServerUrl) {

        var service = {
            list: list
        };

        return service;

        function list(){
            return $http.get(ServerUrl + '/product')
                .then(function(response){
                    console.log(response.data);
                    return response.data;
                }, function(response){
                    console.error(response);
                    return response;
                });
        }
    }
})();