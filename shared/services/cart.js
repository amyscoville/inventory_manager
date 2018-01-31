(function(){
    angular
    .module('InventoryManager')
    .factory('Cart', cart);

    function cart($http, ServerUrl, Auth, $localStorage, Transactions, SweetAlert, $state) {

        var service = {
            add: add,
            remove: remove,
            emptyCart: emptyCart,
            cart: $localStorage.cart || {},
            buildSubTransactionsArr: buildSubTransactionsArr,
            placeOrder: placeOrder
        };

        return service;

        //functions

        function add(item, amt) {
            if(service.cart[item.id]){
                console.log('service.cart[product.id] = ', service.cart[item.id]);
                service.cart[item.id].qty += amt;
            } else {
                service.cart[item.id] = {qty: amt, product: item};
            }
            $localStorage.cart = service.cart;
        }

        function remove(id) {
            delete service.cart[id];
            $localStorage.cart = service.cart;
        }

        function emptyCart() {
            service.cart = {};
            $localStorage.cart = service.cart;
        }

        function placeOrder() {
            Transactions.postNewPurchase(service.buildSubTransactionsArr())
                .then(function(response){
                    console.log(response.data);
                    SweetAlert.swal('Thank you for your order!');
                    service.emptyCart();
                    $state.go('products');
                },
                function(response){
                    console.error(response.data);
                });
        }

        function buildSubTransactionsArr() {
            var subTransactionsArr = [];
            console.log(service.cart);
            for (var item in service.cart) {
                var transaction = {id: +item, qty: service.cart[item].qty};
                subTransactionsArr.push(transaction);
            }
            return subTransactionsArr;
        }
    }
})();