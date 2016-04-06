
angular.module('routerApp')
    .controller('homeController', function($scope, $state, $http){
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

    });