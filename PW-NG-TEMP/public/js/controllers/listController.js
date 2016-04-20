storeLocator.controller('listController', function($scope, storeManager) {
	storeManager.getAll('af6c6b4f-d7db-422c-bad8-107a5a96c51f', function(storeErr, storeRes) {
		if(storeErr) {
			console.log("There is no store loaded");
		}
		else {
			var currentStores = storeRes;
			console.log(currentStores);
			console.log("cazzo violento");

			}
	})
});
