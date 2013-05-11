//http://www.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&api_key=237092eefc192e84aa7c30e357ad64bf&nojsoncallback=1&per_page=50&page=1&geo=1&tags=1

angular.module('flickrpickrServices', ['ngResource']).
    factory('Photos', function($resource){
  		return $resource('js/flickr1.json', {}, {
    	query: {method:'GET'}
  		});
	});