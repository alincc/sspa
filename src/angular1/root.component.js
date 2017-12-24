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
		$scope.selected = 'hihihih';

        messageBusSubject.subscribe((itemData)=>{
        	//console.log("sd",itemData,data, data.find((item)=> item.id === itemData.data));
        	// alert(data.find((item)=> item.id === itemData.data).movie)
			$scope.selected = data.find((item)=> item.id === itemData.data).movie
			console.log($scope.selected)
		});

		function test(){
            declareChildApplication('angular2', ()=> import("./../angular4/angular4App.js"), hashPrefix('/'));
		}

		test();

		vm.frameworkInspector = false;
		vm.styles = {};

		let subscription;


        vm.$onInit = () => {

        };

		vm.$onDestroy = () => {

		}
	}
})
