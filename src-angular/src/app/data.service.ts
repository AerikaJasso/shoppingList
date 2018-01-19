import { Item } from './item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService {

  constructor(
    private _http: HttpClient,
  ) { }

  getItems(): Observable<Item[]> {
    return this._http.get<Item[]>('http://localhost:3000/api/items');
  }

  addItem(item): Observable<any> {
    console.log('The item in the post observable stream:', item);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/api/item', item, {headers: headers});
  }

  updateItem(updatedItem): Observable<any> {
    console.log('The item in the update observable stream:', updatedItem);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this._http.put('http://localhost:3000/api/item/' + updatedItem._id, updatedItem, { headers: headers });
  }

  deleteItem(id): Observable<any> {
    return this._http.delete('http://localhost:3000/api/item/' + id);
  }

}
