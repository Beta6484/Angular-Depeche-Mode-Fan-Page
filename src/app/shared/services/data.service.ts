import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = '../../../assets/data/data.json';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(
    private _httpClient: HttpClient
  ) { }

  public getData() {
    return this._httpClient.get(URL);
  }
}