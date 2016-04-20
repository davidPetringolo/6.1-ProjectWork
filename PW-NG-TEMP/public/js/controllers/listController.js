storeLocator.controller('listController', function($scope, storeManager) {
	storeManager.getAll('af6c6b4f-d7db-422c-bad8-107a5a96c51f', function(storeErr, storeRes) {
		if(storeErr) {
			console.log("There are no stores loaded. Should redirect in ErrorPage");
		}
		else {
			$scope.currentStores = storeRes;
			//console.log(currentStores);
		}
	})
});

/*
	onclick dello store -> openStore.set(guid); //carica i dati di quello store 
										^- verrà usato da detailsController per prendere le info
															^- verrà usato da detailsView	 
*/