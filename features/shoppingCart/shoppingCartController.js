(function(){
    angular
    .module('InventoryManager')
    .controller('shoppingCartController', shoppingCartCtrl);

    function shoppingCartCtrl(Cart) {
        //local variable
        var vm = this;

        //bound variables
        vm.cartItems = Cart.buildCart();
        vm.itemsInCart = Cart.itemsInCart;

        //bound methods
        vm.emptyCart = emptyCart;

        //bound method implementations
        function emptyCart() {
            Cart.itemsInCart = 0;
            vm.itemsInCart = Cart.itemsInCart;
            Cart.inCart = [];
            vm.cartItems = Cart.buildCart();
        }
    }
})();