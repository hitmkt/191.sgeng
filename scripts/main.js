'use strict';

function mainCtrl($scope, $modal, $http, $location, $rootScope) {

  $scope.model = {id:'',key:'',long_value:'',small_value:''};
  $scope.user = {email:'',password:''};
  $scope.isLogin = false;
  $scope.openModal = openModal;
  $scope.save = save;
  $scope.signin = signin;
  $scope.signout = signout;

  // $scope.models_database =  modelsFactory;
  // $scope.models_database.$loaded(function(test) {
  //   $scope.models = test[0];
  // });
  // 
  $scope.is_1_mo = false;
  $scope.is_2_mo = false;
  var url = $location.absUrl().split('/');
  if(url){
    var active = url[url.length-1].split('.');
    if(active == "")
      $scope.active = url[url.length-2];
    else
      $scope.active = active[0];
  }
  $scope.mo = function(value){
    if(value === '1') $scope.is_1_mo = true;
    else if(value === '2') $scope.is_2_mo = true;
  }
  $scope.ml = function(value){
    if(value === '1') $scope.is_1_mo = false;
    else if(value === '2') $scope.is_2_mo = false;
  }
  function openModal(selectedModel) {
    $modal.open({
      templateUrl: 'templates/modal.html',
      controller: modalCtrl,
      resolve: {
        selectedModel: function () {
          return selectedModel;
        }
      }
    });
  }
  function save(model){
    // model.id = $scope.models.length+1;
    // var updates = {};
    // updates['/common/' + $scope.models.length] = model;
    // if($scope.isLogin)
    //   firebase.database().ref().update(updates);
  }
  var one = true;
  function signin(user){
    // firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(function() {
    //   $scope.isLogin = true;
    //   // if the messages are empty, add something for fun!
    //   if(one){
    //     one = false;


    //   }
    // }, function(error) {
    //   $scope.isLogin = false;
    // });
  }

  function signout(){
    // try{
    //   firebase.auth().signOut().then(function() {
    //     $scope.isLogin = false;
    //   }, function(error) {
    //     // An error happened.
    //   });
    // }catch(e){
    //   console.log("로그아웃에러");
    // }
  }
}

function modalCtrl($modalInstance, $scope, selectedModel){
    $scope.activeModel = selectedModel;

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

// function modelsFactory($firebaseArray){
//     var ref = firebase.database().ref();
//     return $firebaseArray(ref);
// }

angular.module('myMiniFactory', ['mm.foundation'])
    .controller('mainCtrl', mainCtrl)
    .controller('modalCtrl', mainCtrl)
    .filter('filterWithOr', function ($filter) {
      var comparator = function (actual, expected) {
        // console.log(expected);
        if (angular.isUndefined(actual)) {
          // No substring matching against `undefined`
          return false;
        }
        if ((actual === null) || (expected === null)) {
          // No substring matching against `null`; only match against `null`
          return actual === expected;
        }
        if ((angular.isObject(expected) && !angular.isArray(expected)) || (angular.isObject(actual) && !hasCustomToString(actual))) {
          // Should not compare primitives against objects, unless they have custom `toString` method
          return false;
        }
        expected = expected.split(' ');
        actual = angular.lowercase('' + actual);
        if (angular.isArray(expected)) {
          var match = false;
          expected.forEach(function (e) {
            e = angular.lowercase('' + e);
            if (actual.indexOf(e) !== -1) {
              match = true;
            }
          });
          return match;
        } else {
          expected = angular.lowercase('' + expected);
          return actual.indexOf(expected) !== -1;
        }
      };
      return function (campaigns, filters) {
        return $filter('filter')(campaigns, filters, comparator);
      };
    });