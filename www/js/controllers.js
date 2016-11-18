todoApp.controller('TasksCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ];
});

todoApp.controller('AddTaskCtrl', function($scope, $ionicHistory, $cordovaCamera) {
  $scope.image = "";
  $scope.goBack = function() {
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
      console.log(imageData);
      $scope.image = imageData;
    });
  };
});

todoApp.controller('ListsCtrl', function($scope) {
  $scope.lists = [
    { title: 'Super Mario' },
    { title: 'Duck Hunt' },
  ];
});
