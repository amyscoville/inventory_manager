(function(){
    angular
    .module('InventoryManager')
    .controller('productsController', productsCtrl);

    function productsCtrl(Product, products, Auth, $state) {
        //local variable
        var vm = this;
        vm.productsArr;
        
        displayProducts();
        //bound methods
        
        vm.displayProducts = displayProducts;
        vm.goToDetails = goToDetails;
        
        //bound properties

        //bound method implementations
        function displayProducts() {
            Product.list()
                .then(function(response){
                    vm.productsArr = response.data;
                    return response;
                }, function(response){
                    console.error(response.data);
                });
        }

        function goToDetails() {
            $state.go('productDetails');
        }
    }
})();