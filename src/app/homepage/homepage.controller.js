/**
 * Created by jbc on 09/10/2016.
 */
export class HomepageController {
  constructor (listMobiles) {
    'ngInject';

    this.filterByPrice = '';
    this.filterByWeight = '';
    console.log('this.filterByPrice', this.filterByPrice);


    this.listMobiles = listMobiles;
    console.log('this.listMobiles', this.listMobiles);

  }
}
