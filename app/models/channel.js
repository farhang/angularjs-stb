/**
 * Developed by Farhang Darzi
 */


angular.module(constants.appName).factory("channel", function ($http, $rootScope, uri) {
  var url = uri.channel;
  return {
    getAll: function (obj) {
      $http({
        method: 'GET',
        url: url.getAll(obj)
      }).success(function(data) {
        var x2js = new X2JS();
        $rootScope.channelList = x2js.xml_str2json(data);
        $rootScope.channelList = $rootScope.channelList.list.record;
        console.log($rootScope.channelList);
      }).error(function(e) {
        console.log(e);
        return e;
      });
    }
  };
});
