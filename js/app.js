/*angular.module('flickrpickr', [], function($routeProvider) {
  $routeProvider.when('/photo/:photoId', {
    templateUrl: 'photo.html',
    controller: photoSelectedCtrl
  }).
  otherwise({redirectTo: '/'});
});*/


var ffflingur = angular.module('ffflingur', ['ngResource']);


ffflingur.factory('photoData',function($resource){
    return $resource('js/flickr1.json',{ }, {
    getData: {method:'GET', isArray: false}
    });
})
    .config(function($routeProvider) {
        $routeProvider.when('/photo/:photoId', {
            templateUrl: 'photo.html',
            controller: photoSelectedCtrl
        })
        .otherwise({
            redirectTo:'/'
        });
    });

