import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppServiceProvider {

  private menuId;

  getMenuId() {
    return this.menuId;
  }

  setMenuId(menuId) {
    this.menuId = menuId;
  }

  constructor(public http: HttpClient) {
    console.log('Hello AppServiceProvider Provider');
  }

}
