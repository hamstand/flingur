function photoPickerCtrl($scope, photoData) {
    photoData.get(function(data){
        $scope.photos = data.photos;
    });
     
}

function photoSelectedCtrl ($scope, photoData, $routeParams) {
    photoId = $routeParams.photoId;
    
    photoData.get(function(data){
    	//guessing there's a better way to do this...
        var phoLen = data.photos.photo.length;
        for (var i = phoLen - 1; i >= 0; i--) {
            if (data.photos.photo[i].id == photoId) {
                break;
            }
        }
        $scope.photo = data.photos.photo[i];
    });
}   