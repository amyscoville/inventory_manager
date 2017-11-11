(function(){
    angular
    .module('InventoryManager')
    .controller('productsController', productsCtrl);

    function productsCtrl(Product, products, Auth) {
        //local variable
        var vm = this;
        vm.productsArr;
        
        displayProducts();
        //bound methods
        
        vm.displayProducts = displayProducts;
        
        //bound properties

        //bound method implementations
        function displayProducts() {
            Product.list()
                .then(function(response){
                    vm.productsArr = response;
                    return response;
            });     

            //POSSIBLY USE NG-REPEAT TO DISPLAY PRODUCTS
        }
    }
})();