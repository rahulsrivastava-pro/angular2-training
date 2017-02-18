import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FormPosterService {

    //shortcut to avoid providing a rivate variable above the constructor
    constructor(private http: Http) { }

    private extractData(res: Response){
        let body = res.json();
        return body.fields || {};
    }

    private handleError(error: any){
        console.error('Post form error: ', error);
        return Observable.throw(error.statusText);
    }

    postEmployeeForm(employee: Employee):Observable<any>{
        let body = JSON.stringify(employee);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers : headers })

        //server created in different project: https://github.com/antcalatayud/Node_server
        return this.http.post('http://localhost:3100/postemployee', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    


}
