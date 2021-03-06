import angular from 'angular';
import template from './root.template.html';
import {declareChildApplication} from 'single-spa';
import {messageBusSubject} from './../common/message-bus.js';
import {data} from './../data/data.js';

function hashPrefix(prefix) {
    return function(location) {
        //console.log(location)
        return location.hash.startsWith(`#${prefix}`);
    }
}

angular
.module('single-spa-app')
.component('root', {
	template,
	controllerAs: 'vm',
	controller($timeout, $scope) {
		const vm = this;
		$scope.movieTitle = '';
		$scope.movieDescription = '';
		$scope.showModal = false;

        messageBusSubject.subscribe((itemData)=>{
			if(itemData.action === 'OPEN_GALLERY_ITEM'){
				const movieData = data.find((item)=> item.id === itemData.data);
				$scope.movieTitle = movieData.movie;
				$scope.movieDescription = movieData.long_description;
				$scope.showModal = true;

				try {
					$scope.$digest();
				}catch(e){}
				
			}
		});

		$scope.hideModal = function(event){
			if(event){
				event.preventDefault();
			}
			$scope.showModal = false;
		}
	
		vm.frameworkInspector = false;
		vm.styles = {};

		let subscription;


        vm.$onInit = () => {

        };

		vm.$onDestroy = () => {

		}
	}
})
