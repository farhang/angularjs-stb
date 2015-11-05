/**
 * Developed by Farhang Darzi
 */

/**
 * Developed by Farhang Darzi
 */


angular.module(constants.appName).factory("user", function ($http, $rootScope, uri) {
  var url = uri.user;
  return {
    getInfo: function (macAddress) {
      console.log(url.getInfo(macAddress));
      $http({
        method: 'GET',
        url: url.getInfo(macAddress)
      }).success(function(data) {
        console.log('success');
        $rootScope.userInfo = data;
        console.log($rootScope.userInfo);
      }).error(function(e) {
        console.log('failed');
        console.log(e);
        return e;
      });
    }
  };
});
