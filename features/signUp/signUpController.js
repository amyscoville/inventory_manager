(function(){
    angular
    .module('InventoryManager')
    .controller('signUpController', signUpCtrl);

    function signUpCtrl(Auth, $state, SweetAlert) {
        //local variable
        var vm = this;

        vm.empty = false;
        vm.badEmail = false;
        vm.mismatchedPassword = false;

        //bound methods

        vm.clickSubmit = clickSubmit;
        
        //bound properties
        vm.registration = {
            fName: '',
            lName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        //bound method implementations
        function clickSubmit(registration) {
            vm.empty = hasEmptyInputs(registration);
            vm.badEmail = hasInvalidEmail(registration.email);
            vm.mismatchedPassword = hasMismatchedPasswords(registration);
            if (!vm.empty && !vm.badEmail && !vm.mismatchedPassword) {
                Auth.signup(vm.registration)
                    .then(function(user){
                        $state.go('products');
                    }, function(response){
                        console.error(response);
                        SweetAlert.swal("ERROR", response.data.message, "warning");
                    });
            }
            //reset vm.empty etc??????
        }

        //utility functions
        function hasEmptyInputs(registration) {
            return (registration.name === '' || registration.email === '' || registration.password === '' || registration.confirmpassword === '');
        }

        function hasInvalidEmail(email) {
            return !(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email));
        }

        function hasMismatchedPasswords(registration) {
            return !(registration.password === registration.confirmPassword);
        }
    }
})();

