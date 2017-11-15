(function(){
    angular
    .module('InventoryManager')
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
                    templateUrl: 'features/products/productDetails/product-details-view.html',
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
                })
                
                .state('orderHistory', {
                    url: '/order-history',
                    templateUrl: 'features/orderHistory/order-history-view.html',
                    controller: 'orderHistoryController as orderHistoryCtrl',
                    resolve: {
                        // product: function(Product, $stateParams) {
                        //     return Product.grab($stateParams.id).then(function(response){
                        //         return response.data[0];
                        //     }, function(response) {
                        //         console.error(response.data);
                        //     });
                        // }
                    }
                })
                
                .state('shoppingCart', {
                    url: '/shopping-cart',
                    templateUrl: 'features/shoppingCart/shopping-cart-view.html',
                    controller: 'shoppingCartController as sc',
                    resolve: {
                        // auth: function(Auth, $state){
                        //     if(Auth.user){
                        //         $state.transitionTo('login');
                        //     }
                        // }
                    }
                });

            $urlRouterProvider.otherwise('/products');
    }])
})();