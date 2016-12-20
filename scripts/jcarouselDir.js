'use strict';
angular.module('myMiniFactory')
	.directive('jcarousel', function ($rootScope, $location, $window) {
		return {
			link: function (scope, element, attrs) {
				element.find('img').bind('click', function() {// JQuery 사용
	        // element.find('input')[0].click();
	        alert("test");
	        $window.location = "http://localhost:4000/board.html";
	      });
				scope.isOpen = false;
	      scope.open = function(event){
					console.log('디렉티브');
					console.log(scope);
					console.log(element);
					console.log(attrs);
					console.log(event);
					console.log(event.clientY);
					$rootScope.isOpen = !$rootScope.isOpen;
					console.log($rootScope.isOpen);
					$rootScope.clientY = event.clientY+15;
					$rootScope.clientX = 1000;
	      }
			}, 
			restrict:"EA"
		};
	});