describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should return favorite foods by name', function() {
		var people = [{
			name: 'Bob',
			favoriteFood: 'Bread'
		},
		{
			name: 'Jim',
			favoriteFood: 'Pizza'
		},
		{
			name: 'Jerry',
			favoriteFood: 'Pizza'
		}];

		var favoriteFood = $filter('favoriteFood')(people, 'Pizza');

		expect(favoriteFood[0].name).toEqual('Jim');
		expect(favoriteFood[1].name).toEqual('Jerry');
	})


});
