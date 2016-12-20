'use strict';
angular.module('myMiniFactory')
	.directive('syClick', function ($rootScope) {
		return {
			link: function (scope, element, attrs) {
				element.find('button').bind('click', function() {// JQuery 사용
	        // element.find('input')[0].click();
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