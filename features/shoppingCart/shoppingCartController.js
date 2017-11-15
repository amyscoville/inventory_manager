(function(){
    angular
    .module('InventoryManager')
    .controller('shoppingCartController', shoppingCartCtrl);

    function shoppingCartCtrl(Cart, Transactions, SweetAlert) {
        //local variable
        var vm = this;

        //bound variables
        vm.cartItems = Cart.buildCart();
        vm.itemsInCart = Cart.itemsInCart;
        // vm.subTransactions = vm.buildSubTransactionsArr();

        //quantities work fine unless you toggle between products page and shopping cart page, then it resets cart

        //bound methods
        vm.emptyCart = emptyCart;
        vm.placeOrder = placeOrder;
        vm.buildSubTransactionsArr = buildSubTransactionsArr;

        //bound method implementations
        function emptyCart() {
            Cart.itemsInCart = 0;
            vm.itemsInCart = Cart.itemsInCart;
            Cart.inCart = [];
            vm.cartItems = Cart.buildCart();
        }

        function placeOrder(subTransactions) {
            Transactions.postNewPurchase(subTransactions)
                .then(function(response){
                    console.log(response.data);
                    SweetAlert.swal('Thank you for your order!');
                    vm.emptyCart();
                }, 
                function(response){
                    console.error(response.data);
                });
        }

        function buildSubTransactionsArr() {
            var subTransactionsArr = [];
            var arr = vm.cartItems;
            for (var i = 0; i < arr.length; i++) {
                var transaction = {id: arr[i].id, qty: arr[i].quantity};
                subTransactionsArr.push(transaction);
            }
            return subTransactionsArr;
        }

    }
})();