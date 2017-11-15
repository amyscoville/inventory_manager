(function(){
    angular
    .module('InventoryManager')
    .factory('Cart', cart);

    function cart($http, ServerUrl) {

        var service = {
            inCart: [],
            buildCart: buildCart
        };

        return service;

        //functions
        function buildCart() {
            for (var i = 0; i < service.inCart.length; i++) {
                var finalCart = [];
                service.inCart[i][quantity] = 1;
                if (finalCart.includes(service.inCart[i])) {
                    service.inCart[i][quantity]++;
                    finalCart.push(service.inCart[i]);
                } else {
                    fincalCart.push(service.inCart[i]);
                }
            }
            return finalCart;
        }
    }
})();

//For placing orders: 
//1) user clicks button under product 
//2) "inCart" array will update to have product in it 
//3) If product is already in array, increase quantity?
//Do I use a service or a controller to do this? the products 
//page and the product details page have different controllers than the shopping cart page. HELP.