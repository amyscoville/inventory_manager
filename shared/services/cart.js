(function(){
    angular
    .module('InventoryManager')
    .factory('Cart', cart);

    function cart($http, ServerUrl, Auth, $localStorage) {

        var service = {
            add: add,
            remove: remove,
            emptyCart: emptyCart,
            cart: {
            }
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
            
        }
    }
})();
