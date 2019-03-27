import { LocationItem } from './../../models/location-item/location-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  // Creating a new Object 
  locationItem = {} as LocationItem;

  locationItemRef$: FirebaseListObservable<LocationItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.locationItemRef$ = this.database.list('geolocations/');

    /*
      shopping-list:
        0:
          itemName: 'Pizza',
          itemNumber: 1
        1:
          itemName: 'Cheesecake',
          itemNumber: 5
    */
  }
  
  // addShoppingItem(shoppingItem: ShoppingItem) {
  //   /*
  //     Create a new anonymous object and convert itemNumber to a number.
  //     Push this to our Firebase database under the 'shopping-list' node.
  //   */
  //   this.shoppingItemRef$.push({
  //     itemName: Number(this.shoppingItem.name),
  //     itemNumber: Number(this.shoppingItem.phnnumber)
  //   });

  //   // Reset our ShoppingItem
  //   this.shoppingItem = {} as ShoppingItem;

  //   // Navigate the user back to the ShoppingListPage
  //   this.navCtrl.pop();
  // }

}
