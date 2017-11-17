(function(){
    angular
    .module('InventoryManager')
    .controller('shoppingCartController', shoppingCartCtrl);

    function shoppingCartCtrl(Cart, Transactions, SweetAlert) {
        //local variable
        var vm = this;

        //bound variables
        vm.items = Cart.cart;

        //quantities work fine unless you toggle between products page and shopping cart page, then it resets cart

        //bound methods
        vm.emptyCart = emptyCart;
      
        //bound method implementations
        function emptyCart() {
            Cart.emptyCart();
        }
    }
})();