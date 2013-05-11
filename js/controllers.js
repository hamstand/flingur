

var flickrURL = "http://www.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&api_key=237092eefc192e84aa7c30e357ad64bf&nojsoncallback=1&per_page=50&page=1&geo=1&tags=1";

function photoPickerCtrl($scope, $http) {
	//use local till we sort out x-domain
	$http.get("js/flickr1.json").success(function(data) {
		
		$scope.photos = data.photos;
		/*
			page: 1,
    		pages: 10,
    		perpage: 50,
    		total: 500
		*/

		//return photo urls:
		//http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
		

	});
}


    

