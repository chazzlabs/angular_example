angular.module('userCountryApp')
    .controller('userListCtrl', function() {
        var _this = this;

        _this.users = [];

        _this.init = function() {
            _this.addUser({ name: 'Jackson', country: 'Germany' });
            _this.addUser({ name: 'Milton', country: 'England' });
        };

        _this.addUser = function(user) {
            _this.users.push(user);
        };

        _this.removeAllUsers = function() {
            _this.users.length = 0;
        };

    });
