(function(){
    angular
    .module('InventoryManager')
    .controller('shoppingCartController', shoppingCartCtrl);

    function shoppingCartCtrl(Cart, Transactions, SweetAlert) {
        //local variable
        var vm = this;

        //bound variables
        vm.items = Cart.cart;
        vm.numItems = countItems(vm.items);

        //quantities work fine unless you toggle between products page and shopping cart page, then it resets cart

        //bound methods
        vm.emptyCart = emptyCart;
        vm.countItems = countItems;
      
        //bound method implementations
        function emptyCart() {
            Cart.emptyCart();
        }

        function countItems(obj) {
            var totalNum = 0;
            for (var item in obj) {
                console.log('item', item);
                totalNum += obj[item].qty;
            }
            return totalNum;
        }

        // function placeOrder(cartObj){
        //     var 
        //     Transactions.postNewPurchase()
        //         .then(function(response){
        //             console.log(response.data);
        //             SweetAlert.swal('Thank you for your order!');
        //             vm.emptyCart();
        //         }, 
        //         function(response) {
        //             console.error(response.data);
        //         });
        // }

        // function placeOrder(subTransactions) {
            //     Transactions.postNewPurchase(subTransactions)
            //         .then(function(response){
            //             console.log(response.data);
            //             SweetAlert.swal('Thank you for your order!');
            //             vm.emptyCart();
            //         }, 
            //         function(response){
            //             console.error(response.data);
            //         });
            // }
    
            // function buildSubTransactionsArr() {
            //     var subTransactionsArr = [];
            //     var arr = vm.cartItems;
            //     for (var i = 0; i < arr.length; i++) {
            //         var transaction = {id: arr[i].id, qty: arr[i].quantity};
            //         subTransactionsArr.push(transaction);
            //     }
            //     return subTransactionsArr;
            // }
    }
})();