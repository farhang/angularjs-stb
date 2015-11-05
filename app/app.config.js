/**
 * Developed by Farhang Darzi
 */
stbApp.config([
  '$httpProvider',
  function ($httpProvider) {

  }
]);

stbApp.config(function ($translateProvider) {
  $translateProvider.translations('fa', {
    WELLCOME_TITLE: 'سلام',
    WELLCOME_DESC : 'مفتخریم که هتل ما را برای اقامت انتخاب کرده اید , اوقات خوشی را برای شما آرزومندیم'
  });

  $translateProvider.translations('en', {
    WELLCOME_TITLE: 'Our respectable guest',
    WELLCOME_DESC : 'Honored that you have chosen our hotel for accommodation, We wish you a good time.'

  });

  $translateProvider.translations('ar', {
    WELLCOME_TITLE: 'زوار المحترم',
    WELLCOME_DESC : 'نرحب بکم فی الفندق نگین، نتمنی لکم الاقامة طیبة بجوار علی بن موسی الرضا علیه السلام'
  });

  $translateProvider.preferredLanguage('fa');
  $translateProvider.useSanitizeValueStrategy('escape');
});

stbApp.config([
  '$ocLazyLoadProvider',
  function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      cssFilesInsertBefore: 'ng_load_plugins_before' // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
    });
  }
]);