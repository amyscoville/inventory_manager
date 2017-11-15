(function(){
    angular
    .module('InventoryManager')
    .controller('shoppingCartController', shoppingCartCtrl);

    function shoppingCartCtrl(Cart) {
        //local variable
        var vm = this;

        //bound variables
        vm.cart = Cart.buildCart();



    }
})();