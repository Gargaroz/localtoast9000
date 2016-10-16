angular.module('localtoast9000', ['ui.router','ngAnimate','ngAria','ngMaterial']);

angular.module('localtoast9000').config(function($stateProvider, $urlRouterProvider) {
  
     $stateProvider.state({
      name: 'welcome',
      url: '/welcome',
      template: '<welcome-page></welcome-page>'
    });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/welcome');

});

angular.module('localtoast9000').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
