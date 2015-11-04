/**
 * Developed by Farhang Darzi
 */

stbApp.factory('settings', [
        '$rootScope',
        function ($rootScope) {
            $rootScope.settings = settings;
            return settings;
        }
    ]
);
