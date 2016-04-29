storeLocator.controller('detailsController', function($scope, $state, $cookies, $cookieStore, $http, $stateParams, loginManager, storeDetailsManager) {

    var session = $cookies.getObject('session');
    var guid = $stateParams.guid;
    var gmap;

    storeDetailsManager.getByID(session, guid, function (detailErr, detailRes) {
        if (detailErr) {
            console.log("detail loading failure");
        } else {
            console.log(detailRes);
            $scope.storeDet = detailRes;
            gmap = new GMaps({
                el: '#map',
                lat: detailRes.latitude,
                lng: detailRes.longitude
            });
            gmap.addMarker({
                lat: detailRes.latitude,
                lng: detailRes.longitude,
                infoWindow:{
                    content: '<p>' + detailRes.name + '</p>'
                }
            })

        }
    });

    $scope.logout = function () {
        $cookies.remove('session');
        $state.go('login');
    }
    
});