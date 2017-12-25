import angular from 'angular';
import template from './ng4.template.html';
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
.component('ng4component', {
    template,
    controllerAs: 'vm',
	controller($scope) {

		function test(){
            declareChildApplication('angular2', ()=> import("./../angular4/angular4App.js"), hashPrefix('/'));
		}

		test();
    }
});
