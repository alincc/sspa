import angular from 'angular';
import './root.component.js';
import './gifs.component.js';
import './lorem-ipsum.component.js';

angular
.module('single-spa-app')
.config(($stateProvider, $locationProvider) => {
	$locationProvider.html5Mode({
		enabled: false,
		requireBase: false,
	});
	
	$locationProvider.hashPrefix('');
	

    $locationProvider.hashPrefix('');

	$stateProvider
	.state('root', {
		url: '/app3',
		template: '<root />',
	})
	
	
	.state('root.gifs', {
		url: '/gifs',
		template: '<gifs />',
	})

	.state('root.lorem-ipsum', {
		url: '/lorem-ipsum',
		template: '<lorem-ipsum />',
	})

});
