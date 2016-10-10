/**
 * Created by jbc on 09/10/2016.
 */
export class MobilesFactory {
  constructor ($resource) {
    'ngInject';

    this.path='http://localhost:3002/phones/';

    this.listMobiles = $resource(this.path);

    this.mobile = $resource(this.path + ':name');

    this.getList = function () {
      return this.listMobiles.query();
    };

    this.getMobile = function (name) {
      console.log('name', name);
      return this.mobile.get({name: name});
    };
  }
  getMyList () {
    return this.getList();
  }

  getMyMobile (name) {
    return this.getMobile(name);
  }
}
