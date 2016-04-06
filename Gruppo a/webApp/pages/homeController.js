
angular.module('routerApp')
    .controller('homeController', function($scope, $state, $http){
<<<<<<< HEAD
        $scope.message = 'Ti trovi in home page';

        $http({
            method: 'POST',
            url: 'http://incaneva.it/wp-admin/admin-ajax.php',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: "id:" + $scope.eventID
            }).then(function(resp){
                $scope.event = resp.data;
            }, function (resp){
                alert("ERROR!");
            });
        })

        $scope.goToContact = function(){
            $state.go('contact');
        };

        $scope.goToFirst = function(){
            $state.go('details', {id:1});
        };

        $scope.list = data().getAll();
=======
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
>>>>>>> 2ae7e2bc2576a7c66657f07a9b0b714f9faba385

    });