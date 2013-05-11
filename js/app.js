//http://www.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&api_key=237092eefc192e84aa7c30e357ad64bf&nojsoncallback=1&extras=tags&per_page=50&page=1

var ffflingurApp = angular.module('ffflingurApp', ['ngResource']);

ffflingurApp.factory('photoData',function($resource){
    return $resource('js/flickr1.json',{}, {
    getData: {method:'GET', isArray: false}
    });
})
    .config(function($routeProvider) {
        $routeProvider.when('/photo/:photoId', {
            templateUrl: 'photo.html',
            controller: photoSelectedCtrl
        })
        .otherwise({
            redirectTo:'/',
        });
    });

