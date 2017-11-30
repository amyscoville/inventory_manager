(function(){
    angular
    .module('InventoryManager')
    .controller('shoppingCartController', shoppingCartCtrl);

    function shoppingCartCtrl(Cart, Transactions, SweetAlert) {
        //local variable
        var vm = this;

        //bound variables
        vm.items = Cart.cart;
        vm.totalQuantity = countItems(vm.items);
       
        //bound methods
        vm.emptyCart = emptyCart;
        vm.countItems = countItems;

        countItems();
      
        //bound method implementations
        function emptyCart() {
            vm.items = {};
            Cart.emptyCart();
            console.log("Cart.cart = ", Cart.cart);
        }

        function countItems(obj) {
            var totalNum = 0;
            for (var item in obj) {
                console.log('item', item);
                totalNum += obj[item].qty;
            }
            console.log("total num in cart = ", totalNum);
            return totalNum;
        }
    }
})();