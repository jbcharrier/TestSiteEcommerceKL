export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/homepage/homepage.html',
      controller: 'HomepageController',
      controllerAs: 'mobiles',
      resolve: {
        "listMobiles": function(MobilesFactory) {
          return MobilesFactory.getMyList();
        }
      }
    })
    .when('/:name', {
      templateUrl: 'app/mobile/mobile.html',
      controller: 'MobileController',
      controllerAs: 'mobile'
    })
    .otherwise({
      redirectTo: '/'
    });
}
