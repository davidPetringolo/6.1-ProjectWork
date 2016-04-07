angular.module('inCanevaAPI')
    .controller('homeController', function($scope, $state, $http){
        $scope.message = 'Ti trovi in home page';

        $scope.goToDetails = function(){
            $state.go('details', {id:1});
        };
    })

