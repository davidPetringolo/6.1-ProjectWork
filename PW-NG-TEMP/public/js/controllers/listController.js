storeLocator.controller('listController', function($scope, storeManager) {
	storeManager.getAll('af6c6b4f-d7db-422c-bad8-107a5a96c51f', function(storeErr, storeRes) {
		if(storeErr) {
			console.log("There are no stores loaded");
		}
		else {
			$scope.currentStores = storeRes;
			console.log(currentStores);
			}
	})
});
