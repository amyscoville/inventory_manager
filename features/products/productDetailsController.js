(function(){
    angular
    .module('InventoryManager')
    .controller('productDetailsController', productDetailsCtrl);

    function productDetailsCtrl(product) {
        //local variable
        var vm = this;
        
        //bound methods
        
        
        
        //bound properties
        vm.product = product;
        
        //bound method implementations
       
    }
})();