

var flickrURL = "http://www.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&api_key=383d6452806c5b782b87e4ff292d20e7&nojsoncallback=1&per_page=50&page=1";
	

	function photoCtrl($scope, $http) {
		//use local till we sort out x-domain
		$http.get("js/flickr1.json").success(function(data) {
			//set photos scope to just be the photos - ignore pagination stuff
			
			$scope.photos = data.photos.photo;
			/*
				page: 1,
        		pages: 10,
        		perpage: 50,
        		total: 500
			*/

			//process data to return photo urls
			//http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
			

		});
	}


    

