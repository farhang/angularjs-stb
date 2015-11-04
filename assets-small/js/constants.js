/**
 * Developed by Farhang Darzi
 */

var constants = {
  appName: "stbApp",
  urls: {
    apiBaseUrl: function(){
      if (window.location.hostname == "localhost"){
        return "http://negin.iabr.ir/";
      }else{
        return "/";
      }
    }
  }
};