/**
 * Developed by Farhang Darzi
 */
stbApp.value('uri', {
  channel: {
    getAll: function(paramObj){
      console.log(paramObj);
      console.log(constants.urls.apiBaseUrl() + 'channel_list.php?mac=' + paramObj.macAddress + "&asset_type=" + paramObj.assetType + "&search_by=" + paramObj.searchby + "::TV");
      return constants.urls.apiBaseUrl() + 'channel_list.php?mac=' + paramObj.macAddress + "&asset_type=" + paramObj.assetType + "&search_by=" + paramObj.searchby + "::TV";
    },
    getUrl: function(paramObj){
      return constants.urls.apiBaseUrl() + "play_url.php?package_product_id=" + paramObj.productID + "&asset_id=" + paramObj.assetID + "&mac=" + paramObj.macAddress;
    },
  },
  language: {
    get: function(paramObj){
      return constants.urls.apiBaseUrl() + 'getGuestName.php?macAddress='+paramObj.macAddress;
    }
  }
});