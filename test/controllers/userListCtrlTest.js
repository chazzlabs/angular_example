describe('userListCtrl', function() {
    var scope;
    var controller;

    beforeEach(module('userCountryApp'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('userListCtrl as userList', {
            $scope: scope
        });
    }));

    it('initializes an empty user list', function() {
        expect(controller.users.length).toEqual(0);
    });

    describe('#init', function() {
        it('adds default users', function() {
            spyOn(controller, 'addUser');

            controller.init();

            expect(controller.addUser).toHaveBeenCalled();
            expect(controller.addUser.calls.count()).toEqual(2);
            expect(controller.addUser.calls.argsFor(0)).toEqual([{ name: 'Jackson', country: 'Germany' }]);
            expect(controller.addUser.calls.argsFor(1)).toEqual([{ name: 'Milton', country: 'England' }]);
        });
    });

    describe('user list function', function() {
        beforeEach(function() {
            controller.init();
        });

        describe('#addUser', function() {
            it('adds a new user', function() {
                var user = { name: 'David', country: 'Canada' };
                controller.addUser(user);
                expect(controller.users.length).toEqual(3);
            });
        });

        describe('#removeAllUsers', function() {
            it('removes all users', function() {
                controller.removeAllUsers();
                expect(controller.users.length).toEqual(0);
            });
        });
    });
});
