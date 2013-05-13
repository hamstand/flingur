
var ffflingurApp = angular.module('ffflingurApp', ['ngResource']);

ffflingurApp.factory('AllPhotos', function($resource) {
    return $resource('http://www.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&api_key=237092eefc192e84aa7c30e357ad64bf&nojsoncallback=1&per_page=50&page=:pageId&extras=tags',{format:'json', jsoncallback: 'JSON_CALLBACK'},  {get: {method: 'JSONP', isArray: false}});
})
.factory('SinglePhoto', function($resource) {
    return $resource('http://flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=147e1f183cb376d54f25dfe17e766a5e&photo_id=:photoId&format=json&nojsoncallback=1',{format:'json', jsoncallback: 'JSON_CALLBACK'},  {get: {method: 'JSONP', isArray: false}});
})
.config(function($routeProvider) {
    $routeProvider.when('/photo/:photoId', {
        templateUrl: 'photo.html',
        controller: 'PhotoSelectedCtrl'
    })
    .otherwise({
        redirectTo:'/'
    });
});

