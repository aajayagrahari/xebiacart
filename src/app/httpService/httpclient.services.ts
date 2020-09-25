import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable()
export class httpclient {
  //private _baseurl: string = "https://xebiascart.herokuapp.com/";

  httpOptions: any;
  constructor(private _httpclient: HttpClient) {
    //console.log("Path :" + this._baseurl);
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTION",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
      }),
      withCredentials: true,
    };
  }

  gethttpdata(restpath: string): Observable<any[]> {
    return this._httpclient
      .get(`${environment.apiBaseUrl}` + restpath, this.httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  deletehttpdata(restpath: string, token: string): Observable<any[]> {
    return this._httpclient
      .delete(`${environment.apiBaseUrl}` + restpath, this.httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  posthttpdata(restpath: string, requestdata: any): Observable<any[]> {
    let body = JSON.stringify(requestdata);
    return this._httpclient
      .post(`${environment.apiBaseUrl}` + restpath, body, this.httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((err) => {
          return this.handleError(err);
        })
      );
  }

  private handleError(error: Response | any) {
    if (error.status == 401) {
    } else {
      console.error("ApiService::handleError", error);
    }
    return throwError(error);
  }
}
