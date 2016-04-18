angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope, $http, $state, $ionicPopup) {
    $scope.send = function(email, pwd) {
        $http.post("http://its-bitrace.herokuapp.com/api/public/v2/login",{
            email: email,
            password: CryptoJS.SHA512(pwd).toString(CryptoJS.enc.Base64)
        }).success(function(result) {
            if(result.success)
                $state.go('stores', {session: result.data.session});
            else {

                    var alertPopup = $ionicPopup.alert({
                        title: 'ops!',
                        template: 'forse le credenziali non sono esatte. prova a reinserirle :D'
                    });

                    alertPopup.then(function(res) {
                        console.log(result.errorMessage);
                    });

            }
        })
    }
})
   
.controller('storesCtrl', function($scope, $http, $stateParams) {
    $http.get("http://its-bitrace.herokuapp.com/api/v2/stores", {
        headers: {'x-bitrace-session': $stateParams.session}
    }).success(function(result) {
        $scope.stores = result.data;
    })
})
   
.controller('dettaglioCtrl', function($scope, $stateParams) {
    $scope.store = $stateParams.st;
    var map = new GMaps({
        el: '#map',
        lat: $stateParams.st.latitude,
        lng: $stateParams.st.longitude
    });
    map.addMarker({
        lat: $stateParams.st.latitude,
        lng: $stateParams.st.longitude,
        title: $stateParams.st.address,
    });

    $scope.geoloc = function() {
        GMaps.geolocate({
             success: function(position) {
                map.setCenter(position.coords.latitude, position.coords.longitude);
             },
             error: function(error) {
                alert('Geolocation failed: '+error.message);
             },
             not_supported: function() {
                alert("Your browser does not support geolocation");
             }
         });
    }



})
 