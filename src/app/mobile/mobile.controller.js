export class MobileController {
  constructor ($routeParams, MobilesFactory) {
    'ngInject';

    this.mobileName = $routeParams.name;

    this.myMobile = MobilesFactory.getMyMobile(this.mobileName);
    console.log('this.myMobile', this.myMobile);
  }
}
