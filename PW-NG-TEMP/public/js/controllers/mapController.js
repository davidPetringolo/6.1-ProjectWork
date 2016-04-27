storeLocator.controller('mapController', function($scope, $state, $cookies, $cookieStore, $http, storeManager){

    var session = $cookies.getObject('session');
    var gmap;

    storeManager.getAll(session, function(err, result){
        if(err){
            console.log('errore caricamento stores')
        } else {
            list = result;
            gmap = new GMaps({
                el: '#map',
                lat: 66, //placeholder
                lng: 66  //placedshbujdcbsidjk
            });
            for (var i = result.length - 1; i >= 0; i--) {

                    gmap.addMarker({
                    lat: result[i].latitude,
                    lng: result[i].longitude,
                    infoWindow:{
                        content: '<p>' + result[i].name + '</p>'
                    }
                })
            }
        }
    });

    $scope.logout = function () {
        $cookies.remove('session');
        $state.go('login');
    }

});