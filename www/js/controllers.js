todoApp.controller('TasksCtrl', function($scope) {
  $scope.$on('$ionicView.enter', function(e) {
    $scope.tasks = JSON.parse(window.localStorage.getItem("tasks"));    
  });
});

todoApp.controller('AddTaskCtrl', function($scope, $ionicHistory, $cordovaCamera) {
  $scope.data = {};
  $scope.image = "";
  $scope.save = function() {
    items = JSON.parse(window.localStorage.getItem("tasks"));
    items.push({"name": $scope.data.name, "desc": $scope.data.desc});
    window.localStorage.removeItem("tasks");
    window.localStorage.setItem("tasks", JSON.stringify(items));
    $ionicHistory.goBack();
  };
  $scope.addImage = function() {
    var options = {
      destinationType : Camera.DestinationType.FILE_URI,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : false,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
    };
    
    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.image = imageData;
    });
  };
});

todoApp.controller('ListsCtrl', function($scope) {
  $scope.lists = [
    { title: 'Personal' },
    { title: 'Official' },
  ];
});
