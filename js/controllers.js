ffflingurApp.controller('PhotoPickerCtrl', function($scope, AllPhotos) {
    $scope.currentPage = 1;

    $scope.getPhotos = function () {
        AllPhotos.get({pageId: $scope.currentPage},function(data){
            $scope.photos = data.photos;
            $scope.pages = $scope.photos.pages;
        });
    }

    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.getPhotos();
        }
    }

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pages) {
            $scope.currentPage++;
            $scope.getPhotos();
        }
    }

    $scope.getPhotos();
}).controller('PhotoSelectedCtrl', function($scope, SinglePhoto, $routeParams) {
    var currPhoto = $routeParams.photoId;
    SinglePhoto.get({photoId: currPhoto},function(data){
        $scope.photo = data.photo;
        $scope.imgURL = "http://farm"+$scope.photo.farm+".staticflickr.com/"+$scope.photo.server+"/"+$scope.photo.id+"_"+$scope.photo.secret+"_b.jpg";
    });
});
