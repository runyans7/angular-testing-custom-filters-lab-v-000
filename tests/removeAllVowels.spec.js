describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels from a string', function() {
		expect($filter('removeAllVowels')('Mississippi')).toEqual('Msssspp');
	});

});
