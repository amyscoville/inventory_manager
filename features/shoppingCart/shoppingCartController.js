(function(){
    angular
    .module('InventoryManager')
    .controller('shoppingCartController', shoppingCartCtrl);

    function shoppingCartCtrl(Cart, Transactions, SweetAlert, $localStorage) {
        //local variable
        var vm = this;

        //bound variables
        vm.items = $localStorage.cart;
        vm.totalQuantity = countItems(vm.items);
       
        //bound methods
        vm.emptyCart = emptyCart;
        vm.countItems = countItems;
        vm.removeItem = removeItem;

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

        function removeItem(id) {
            Cart.remove(id);
        }
    }
})();