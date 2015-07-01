

angular.module('userCountryApp')
    .directive('userList', function() {
        return {
            restrict: 'EA',
            scope: {},
            template: '<ul>'+
                '<li ng-repeat="userList.user in users">' +
                    '<span>{{user.name}}</span>' +
                    '<p>{{user.country}}</p>' +
                '</li>' +
            '</ul>',
            bindToController: true,
            controller: 'userListCtrl',
            controllerAs: 'userList',
            link: function(scope, element, attrs, userList) {
                userList.init();
            }
        };
    });
