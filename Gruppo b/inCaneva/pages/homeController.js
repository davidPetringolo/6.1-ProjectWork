(function() {
var home = angular.module('inCaneva');

    /*
    home.config(function ($httpProvider) {
        //$httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
        console.log('config');
    });
    */

    home.controller('homeController', function($scope, $state, $http){

        $scope.visualizza = function(){

            $http({
                method  : 'POST',
                url     : 'http://incaneva.it/wp-admin/admin-ajax.php',
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
                data    : $.param({
                    action: 'incaneva_events',
                    blog: '1,6,7,8',
                    old: false,
                    limit: 1
                }),
            }).then(function (response){
                $scope.myData = response.data.data;
                $scope.success = response.data.success;
            }, function(){
                alert("Nope");
            })
        };
    });

})();