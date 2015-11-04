/**
 * Developed by Farhang Darzi
 */

stbApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('stb', {
            url: "/",
            template: "content",
            views: {
                'header': {
                    templateUrl: 'app/templates/shared/header.html',
                    controller: "headerController"
                },
                'footer': {
                    templateUrl: 'app/templates/shared/footer.html',
                    controller: "footerController"
                },
                'content': {
                    templateUrl: 'app/templates/shared/content.html',
                    controller: 'bodyController'
                }
            }
        }).state("stb.channel", {
          url: "channel/",
          views:{
            "content@":{templateUrl: "app/templates/channelShow.html"}
          },
          controller: "channelShow",
          resolve: {
            dependencies: [
              '$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                  "app/controllers/channel/channelShow.js",
                  "app/models/channel.js"
                ]);
              }
            ]
          }
        })
    }])
;