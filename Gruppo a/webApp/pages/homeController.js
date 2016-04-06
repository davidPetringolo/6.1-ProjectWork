
angular.module('routerApp')
    .controller('homeController', function($scope, $state, $http){
        $http({
            method: 'POST',
            url: 'http://incaneva.it/wp-admin/admin-ajax.php',
            data: {action: 'incaneva_events',
                blog: '1,6,7,8',
                old: false,
                limit: 1
            }
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {
            console.log("ERRORE");
        });

    });