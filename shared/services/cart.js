(function(){
    angular
    .module('InventoryManager')
    .factory('Cart', cart);

    function cart($http, ServerUrl, Auth) {

        var service = {
            inCart: [],
            buildCart: buildCart,
            itemsInCart: 0
        };

        return service;

        //functions
        function buildCart() {
            var cartArr = service.inCart;
            var alreadyAdded = [];
            var finalCart = [];
            for (var i = 0; i < cartArr.length; i++) {
                currItem = service.inCart[i];
                if(!alreadyAdded.includes(currItem)) {
                    alreadyAdded.push(currItem);
                    currItem.quantity = countInArray(cartArr, currItem);
                    finalCart.push(currItem);
                    service.itemsInCart += currItem.quantity;
                } else {
                    continue;
                }
            }
            return finalCart;
        }

        function countInArray(array, elem) {
            var count = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] === elem) {
                    count++;
                }
            }
            return count;
        }
    }
})();
