storeLocator.controller('detailsController', function($scope, storeDetailsManager) {
    storeDetailsManager.getByID = function('', guid, function(err,result) {
        if (err)
            console.error("Non valid session. Should be redirected to Login");
        else {
            console.log("Valid session. Retriving details info."); //starts a buffering circle
            //when info are ready puts JSON into a list (see below)
            //openStore.set(result.data.data);
            $scope.storeDetails = openStore.get();
        }
    }
});