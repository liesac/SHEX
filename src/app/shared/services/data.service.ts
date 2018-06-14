import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public formatUrl(url: string): string {
        return 'https://udem.herokuapp.com' + url;
    }

    getAllData(url: string): Observable<any> {
        return this.http
            .get(this.formatUrl(url))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }
}