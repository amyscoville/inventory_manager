(function(){
    angular
    .module('InventoryManager')
    .controller('loginController', loginCtrl);

    function loginCtrl(Auth, $state, SweetAlert) {
        //local variable
        var vm = this;

        vm.emptyInput = false;

        //bound methods
        vm.clickEnter = clickEnter;

        //bound properties
        vm.user = {
            email: '',
            password: ''
        }
        
        //bound method implementations
        function clickEnter(user) {
            if (vm.user.email === '' || vm.user.password === '') {
                vm.emptyInput = true;
            } else {
                Auth.login(user)
                    .then(function(user){
                        console.log(user);
                        $state.go('products');
                    }, function(response){
                        console.error(response);
                        SweetAlert.swal("ERROR", response.data.message, "warning");
                    });
            }
        }

        //utility functions

    }
})();