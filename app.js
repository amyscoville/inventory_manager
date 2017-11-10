(function(){
    angular.module('InventoryManager', ['ui.router', 'ngStorage', 'oitozero.ngSweetAlert'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',    
        function($stateProvider, $urlRouterProvider) {
            
            $stateProvider
                .state('sign-up', {
                    url: '/sign-up',
                    templateUrl: 'features/signUp/sign-up-view.html',
                    controller: 'signUpController as signup',
                    // resolve: {
                    //     listItem: function(Item) {
                    //         return Item.list();
                    //     }
                    // }
                })

                .state('login', {
                    url: '/login',
                    templateUrl: 'features/login/login-view.html',
                    controller: 'loginController as login',
                    resolve: {
                        auth: function(Auth, $state){
                            if(Auth.user){
                                $state.transitionTo('products');
                            }
                        }
                    }
                })
                
                .state('products', {
                    url: '/products',
                    templateUrl: 'features/products/products-view.html',
                    controller: 'productsController as products',
                    resolve: {
                        products: function(Product) {
                            return Product.list().then(function(response){
                                return response.data;
                            });
                        }
                    }
                });

            $urlRouterProvider.otherwise('/login');
    }])
    .run(function($rootScope){
        $rootScope.$on('$stateChangeError', 
        function(event, toState, toParams, fromState, fromParams, error){ console.log(error); });
    })
    .constant('ServerUrl', 'http://wta-inventorybackend.herokuapp.com/api/v1');
})();