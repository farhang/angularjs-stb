/**
 * Developed by Farhang Darzi
 */

/*
angular.module(constants.appName).factory("channel", function ($http, uri, $cookies) {
  var url = uri.addressBook;
  return {
    getUrl: function (obj) {
      $http.defaults.headers.common.authorization = 'Bearer ' + $cookies.get("token");
      return $http({
        method: 'POST',
        url: url.add(),
        headers: {'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'},
        data: $.param(this.normalize(obj))
      });
    }
  };
});
*/