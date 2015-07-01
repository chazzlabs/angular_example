'use strict';

describe('userList', function() {
    var $scope;
    var element;

    beforeEach(module('userCountryApp', function($controllerProvider) {
        $controllerProvider.register('userListCtrl', function() {
            this.init = jasmine.createSpy('init');
        });
    }));

    beforeEach(inject(function($rootScope, $compile, $templateCache) {
        $templateCache.put('templates/user-list.html', 'TEST_TEMPLATE');
        $scope = $rootScope.$new(true);
        element = angular.element('<user-list></user-list>');
        $compile(element)($scope);
        $scope.$digest();
    }));

    it('calls init', function() {
        expect(element.controller('userList').init).toHaveBeenCalled();
    });
});
