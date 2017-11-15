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
                    resolve: {
                        auth: function(Auth, $state){
                            if(Auth.user){
                                $state.transitionTo('products');
                            }
                        }
                    }
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
                    controller: 'productsController as productsCtrl',
                    resolve: {
                        products: function(Product) {
                            return Product.list().then(function(response){
                                return response.data;
                            }, function(response) {
                                console.error(response.data);
                            });
                        }
                    }
                })
                
                .state('productDetails', {
                    url: '/productdetails/:id',
                    templateUrl: 'features/products/product-details-view.html',
                    controller: 'productDetailsController as productDetails',
                    resolve: {
                        product: function(Product, $stateParams) {
                            return Product.grab($stateParams.id).then(function(response){
                                return response.data[0];
                            }, function(response) {
                                console.error(response.data);
                            });
                        }
                    }
                });

            $urlRouterProvider.otherwise('/products');
    }])
    .run(function($rootScope, $state){
        $rootScope.$state = $state;
        $rootScope.$on('$stateChangeError', 
        function(event, toState, toParams, fromState, fromParams, error){ console.log(error); });
    })
    .constant('ServerUrl', 'http://wta-inventorybackend.herokuapp.com/api/v1');
})();

