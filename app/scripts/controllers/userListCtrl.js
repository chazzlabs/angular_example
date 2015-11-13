angular.module('userCountryApp')
    .controller('userListCtrl', function userListCtrl() {
        this.users = [];

        this.init = () => {
            this.addUser({ name: 'Jackson', country: 'Germany' });
            this.addUser({ name: 'Milton', country: 'England' });
        };

        this.addUser = (user) => {
            this.users.push(user);
        };

        this.removeAllUsers = () => {
            this.users.length = 0;
        };
    });
