(function(){
    angular
    .module('InventoryManager')
    .factory('Transactions', transactions);

    function transactions($http, ServerUrl, Auth) {

        var service = {
            postNewPurchase: postNewPurchase,
            getListOfTransactions: getListOfTransactions,
            formatDate: formatDate
        };

        return service;

        function postNewPurchase(subTransactions) {
            var date = new Date();
            return $http.post(ServerUrl + '/transaction/', {type: {id: 4, description: 'Inventory Purchase'}, date: formatDate(), subTransactions: subTransactions});
        }

        function getListOfTransactions() {
            return $http.get(ServerUrl + '/transaction');
        }

        function formatDate() {
            var d = new Date(),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
        
            return [year, month, day].join('-');
        }
    }
})();
