(function(){
    angular
    .module('InventoryManager')
    .controller('productDetailsController', productDetailsCtrl);

    function productDetailsCtrl(product, Cart, Auth, SweetAlert, $state) {
        //local variable
        var vm = this;
        
        //bound methods
        vm.addToCart = addToCart;
        
        
        //bound properties
        vm.product = product;
        
        //bound method implementations
        function addToCart(product, qty) {
            Cart.add(product, qty);
        }
    }
})();