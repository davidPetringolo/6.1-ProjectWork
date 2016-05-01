storeLocator.controller('detailsController', function($scope, $state, $cookies, $cookieStore, $http, $stateParams, loginManager, storeDetailsManager, sessionController) {

    var session = $cookies.getObject('session');

    sessionController.check($cookies.getObject('session') ,function(err, result){
        if(!err){
            $state.go('details');
        } else {
            console.log("sessione scaduta");
            $state.go('login');
        }
    });
    
    var guid = $stateParams.guid;
    var gmap;

    $scope.isactive = false;
    $scope.isinactive = false;
    
    storeDetailsManager.getByID(session, guid, function (detailErr, detailRes) {
        if (detailErr) {
            console.log("detail loading failure");
        } else {
            console.log(detailRes);
            $scope.storeDet = detailRes;
            if (detailRes.isActive == false) {
                $scope.isinactive = true;
            } else {
                $scope.isactive = true;
            }
            gmap = new GMaps({
                el: '#map',
                lat: detailRes.latitude,
                lng: detailRes.longitude
            });

            var storePin = 'asserts/storePositionPin.png';

            gmap.addMarker({
                lat: detailRes.latitude,
                lng: detailRes.longitude,
                icon: storePin,
                infoWindow:{
                    content: '<p><h4>' + detailRes.name + '</h4>' + detailRes.address + '<br>' + detailRes.phone + '</p>'
                }
            })

        }
    });

    $scope.logout = function () {
        $cookies.remove('session');
        $state.go('login');
    }



});