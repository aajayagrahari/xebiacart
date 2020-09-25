import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { httpclient } from '../httpservice/httpclient.services';

@Injectable()
export class AppService {

  constructor(protected _httpClient: httpclient) {
  }

  GetProducts(): Observable<any> {
    return this._httpClient.gethttpdata("products").pipe(map((result) => {
      return result;
    }));
  }

  GetProductsByName(data:string): Observable<any> {
    return this._httpClient.gethttpdata("products?title=" + data).pipe(map((result) => {
      return result;
    }));
  }

  ValidateUser(uname:string): Observable<any> {
    return this._httpClient.gethttpdata("users?username=" + uname).pipe(map((result) => {
      return result;
    }));
  }

  GetFilter(): Observable<any> {
    return this._httpClient.gethttpdata("filters").pipe(map((result) => {
      return result;
    }));
  }
}
