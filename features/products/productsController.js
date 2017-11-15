(function(){
    angular
    .module('InventoryManager')
    .controller('productsController', productsCtrl);

    function productsCtrl(Product, products, Auth, Cart, $state, SweetAlert) {
        //local variable
        var vm = this;
        
        //call methods
        displayProducts();
        
        //bound methods
        
        vm.displayProducts = displayProducts;
        vm.addToCart = addToCart;
        
        //bound properties
        vm.productsArr;

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

        function addToCart(product) {
            Cart.inCart.push(product);
            console.log(Cart.inCart);
        }
    }
})();