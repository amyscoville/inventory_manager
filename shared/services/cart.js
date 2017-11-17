(function(){
    angular
    .module('InventoryManager')
    .factory('Cart', cart);

    function cart($http, ServerUrl, Auth) {

        var service = {
            add: add,
            remove: remove,
            emptyCart: emptyCart,
            cart: {
            }
        };

        return service;

        //functions
        

        //object that matches the id of the product to the quantity

        function add(item, amt) {
            if(service.cart[item.id]){
                console.log('service.cart[product.id] = ', service.cart[item.id]);
                service.cart[item.id].qty += amt;
            } else {
                service.cart[item.id] = {qty: amt, product: item};
            }
            console.log('cart: ', service.cart);
        }

        function remove() {

        }

        function emptyCart() {
            service.cart = {};
        }
    }
})();
