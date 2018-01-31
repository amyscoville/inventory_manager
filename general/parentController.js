(function(){
    angular
        .module('InventoryManager')
        .controller('parentController', parentCtrl);

        function parentCtrl(Auth, $state) {
            var vm = this;

            vm.clickLogout = clickLogout;
            vm.signedIn = signedIn;
            
            function clickLogout() {
                Auth.logout();
            }

            function signedIn() {
                return Auth.isLoggedInUser();
            }
        }
})();