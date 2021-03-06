/**
 * Developed by Farhang Darzi
 */

angular.module(constants.appName).controller('siteController', ['$scope', 'channel', 'user',
  function ($scope, channel, user) {
    var channelObj = {
      'macAddress': '00-00-00-00-00-00',
      'assetType' : 'livechannel',
      'searchby'  : 'live_channel_type'
    };
    // Get all list channels and send it to $rootScope.channelList
    channel.getAll(channelObj);

    user.getInfo(channelObj.macAddress);

  }
]);
