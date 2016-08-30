angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
 
  $scope.TODOdata = {};


  var Storage=localStorage.getItem("tst")? JSON.parse(localStorage.getItem("tst")) : [];
  $scope.fromStorage=Storage;

  
  // Create the TODO List modal
  $ionicModal.fromTemplateUrl('templates/TODO.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeTODO = function() {
    $scope.modal.hide();
  };

  // Open the TODOLIst modal
  $scope.TODOshow = function() {
    $scope.modal.show();
  };
  

 //Initailizing  fields of my TODO List
$scope.TODO = function(todoContent){

    this.content = todoContent;
    this.createdOn = Date();
    this.completeOn = null;

  };
  
  
//-----------Creating a List--------------------------------
  $scope.submitTodoList = function() {

    var newrtodo = new $scope.TODO($scope.TODOdata.Todolist);


     Storage.push(newrtodo);

    localStorage.setItem("tst", JSON.stringify(Storage));
  
  };

//------Updating My Todo List---------------------------------
$scope.update=function(index)
  {
    index.completeOn = Date();
    localStorage.setItem("tst", JSON.stringify($scope.fromStorage));
  }

})
.controller('TodoCtrl', function($scope) {

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
