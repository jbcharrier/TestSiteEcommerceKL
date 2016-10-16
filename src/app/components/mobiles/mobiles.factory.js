/**
 * Created by jbc on 09/10/2016.
 */
export class MobilesFactory {
  constructor ($resource) {
    'ngInject';

    this.path='http://localhost:3002/phones/';

    this.ListMobiles = $resource(this.path);

    this.Mobile = $resource(this.path + ':name');


    this.getMyList = function () {
      return this.ListMobiles.query();
    };

    this.getMyMobile = function (name) {
      console.log('name', name);
      return this.Mobile.get({name: name});
    };
  }
}
