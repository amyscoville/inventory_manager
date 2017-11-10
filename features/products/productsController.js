(function(){
    angular
    .module('InventoryManager')
    .controller('productsController', productsCtrl);

    function productsCtrl(Product, products, Auth) {
        //local variable
        var vm = this;

        //bound methods
        vm.getProductsList = getProductsList;
        vm.clickLogout = clickLogout;
        
        //bound properties
        

        //bound method implementations
        function getProductsList() {
            Product.list()
                .then(function(response){
                    console.log(response);
                    return response.data;
                }, function(response){
                    console.error(response);
                    return response.data;
                });
        }

        function clickLogout() {
            Auth.logout();
        }
    }
})();