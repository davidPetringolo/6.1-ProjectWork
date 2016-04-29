storeLocator.controller('mapController', function($scope, $state, $cookies, $cookieStore, $http, storeManager){

    var session = $cookies.getObject('session');
    var gmap;

    storeManager.getAll(session, function(err, result){
        if(err){
            console.error('errore caricamento stores')
        } else {
            list = result;
            gmap = new GMaps({
                el: '#map',
                lat: 66, //placeholder
                lng: 66  //placeholder
            });
            GMaps.geolocate({
                success: function(position) {
                    gmap.setCenter(position.coords.latitude, position.coords.longitude);
                },
                error: function(error) {
                    alert('Geolocation failed: ' + error.message);
                },
                not_supported: function() {
                    alert("Your browser does not support geolocation");
                },
                always: function() {
                    alert("Everything working fine...at least now.");
                }
            });
            for (var i = result.length - 1; i >= 0; i--) {
                gmap.addMarker({
                    lat: result[i].latitude,
                    lng: result[i].longitude,
                    infoWindow:{
                        content: '<p><h4>' + result[i].name + '</h4>' + result[i].address + '<br>' + result[i].phone + '</p>'
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