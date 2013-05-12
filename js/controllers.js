function photoPickerCtrl($scope, photoData, $route, $routeParams) {
   $scope.currentPage = 1;
   console.log("Onon")
   //$scope.photos = photoData.query({pageId: $scope.currentPage});
   
   // $scope.pages = $scope.photos.pages;
    //$scope.currentPage = $scope.photos.page;


    photoData.get({pageId: $scope.currentPage},function(data){
        $scope.photos = data.photos;
    });


    //guessing there's a better way to do this...
    $scope.viewPhoto = function(photoId) {
       // console.log("VIEW",photoId)
        var phoLen = $scope.photos.photo.length;
        for (var i = phoLen - 1; i >= 0; i--) {
            if ($scope.photos.photo[i].id == photoId) {
                break;
            }
        }   
        $scope.photo = $scope.photos.photo[i];
    }


    console.log("MEEE",$routeParams.photoId)
    if ($routeParams.photoId) {
        $scope.viewPhoto($routeParams.photoId)
    }
    /*photoData.get(function(data){
        $scope.allData = data.photos;
        console.log($scope.allData)
        $scope.pages = 10;
        perpage = 50;
        $scope.currentPage = 1;





    });*/

    /*
    var pagesShown = 1;
    var pageSize = 5;
    $scope.items = itemService.getAll();
    $scope.itemsLimit = function() {
        return pageSize * pagesShown;
    };
    $scope.hasMoreItemsToShow = function() {
        return pagesShown < ($scope.items.length / pageSize);
    };
    $scope.showMoreItems = function() {
        pagesShown = pagesShown + 1;         
    };

     $scope.pages = 10;
        $scope.currentPage = 1;

        console.log("SPG",$scope.currentPage);

        $scope.prevPage = function () {
            if ($scope.currentPage > 1) {
                $scope.currentPage--;
                console.log($scope.currentPage);
            }
        }
    
        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pages) {
                $scope.currentPage++;
                console.log($scope.currentPage);
            }
        }
*/


}
