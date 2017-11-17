(function(){
    angular
    .module('InventoryManager')
    .factory('Auth', auth);

    function auth($http, ServerUrl, $localStorage, $state) {

        var service = {
            signup: signup,
            login: login,
            logout: logout,
            isLoggedInUser: isLoggedInUser
        };

        init();

        return service;

        function init() {
            if(isLoggedInUser()) {
                service.user = getClaimsFromToken();
                console.log(service.user);
                if(Date.now() > service.user.exp * 1000) {
                    logout();
                }
            }
        }

        function signup(creds) {
            return $http.post(ServerUrl + '/signup', creds)
                .then(function(response){
                    successAuth(response.data);
                    return new Promise(function(resolve,reject){resolve(service.user);});
                }, function(err){
                    return new Promise(function(resolve,reject){reject(err);});
                });
        }

        function login(creds) {
            return $http.post(ServerUrl + '/login', creds)
                .then(function(response){
                    successAuth(response.data);
                    return new Promise(function(resolve,reject){resolve(service.user);});
                }, function(err){
                    return new Promise(function(resolve,reject){reject(err);});
                }); 
        }

        function logout() {
            delete $localStorage.token;
            delete service.user;
            $state.go('login');
        }

        //decode JWT and translate to readable code

        function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output);
        }
        
        //get usable information from token (like user’s name and id)
        
        function getClaimsFromToken() {
            var token = $localStorage.token;
            var user = {};
            if (typeof token !== 'undefined') {
                var encoded = token.split('.')[1];
                user = JSON.parse(urlBase64Decode(encoded));
            }
            return user;
        }
        
        //on successfully authenticating user, save the token
        
        function successAuth(res) {
            console.log('success - auth');
            $localStorage.token = res.token;
            service.user = getClaimsFromToken();
        }

        function isLoggedInUser() {
            return !!$localStorage.token;
        }
    }
})();


