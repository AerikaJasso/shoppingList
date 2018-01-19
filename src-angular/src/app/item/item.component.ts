import { DataService } from './../data.service';
import { Item } from './../item';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemList: Item[] = [];
  item = new Item();
  editItem: Item;
  // flag created for the form
  toggleForm = false;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this._dataService.getItems().subscribe(items => {
      this.itemList = items;
    });
  }

  addItem(): void {
    this._dataService.addItem(this.item).subscribe(item => {
      // call the get items to the backend to see updated list.
      this.getItems();
    });
  }

  deleteItem(id) {
    this._dataService.deleteItem(id).subscribe( data => {
      console.log(data);
      // updating itemList array on delete
      if (data.n === 1) {
        for ( let i = 0; i < this.itemList.length; i++) {
          if (id === this.itemList[i]._id) {
            this.itemList.splice(i, 1);
          }
        }
      }
    });
  }

  // from the click event on edit button
  showEditForm(item) {
    this.editItem = item;
    this.toggleForm = !this.toggleForm;
  }

  updateItem(editItem) {
      const editedItem: Item = {
        // Use the prior instance of the item (editItem) to get _id.
      _id: this.editItem._id,
      itemName: editItem.value.itemName,
      itemQty:  editItem.value.itemQty,
      // Use the prior instance of the item (editItem) for itemBought.
      itemBought: this.editItem.itemBought
    };

    this._dataService.updateItem(editedItem).subscribe( result => {
      // Update original array to reflect changes.
      this.getItems();
    });
    // hide edit form
    this.toggleForm = !this.toggleForm;
  }

  // reverse the original value of itembought when checked
  updateItemCheckbox(item) {
    item.itemBought = !item.itemBought;
    // send the item back to the database to be updated
    this._dataService.updateItem(item).subscribe(result => {
      // Update original array to reflect changes.
      this.getItems();
    });
  }


}
