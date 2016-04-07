angular.module('inCanevaAPI')
    .controller('detailsController', function($scope, $state, $stateParams, $http, $httpParamSerializerJQLike){

        $scope.viewEvents = function() {
            $http({
                method: 'POST',
                url: 'http://incaneva.it/wp-admin/admin-ajax.php',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike({
                    action: "incaneva_events",
                    blog: "1,6,7,8",
                    old: false,
                    limit: 10
                })
            }).then(function (resp) {
                $scope.events = resp.data.data;
            }, function (resp) {
                alert("ERROR!");
            })

        }})