import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    getClass: any = [];
    List: any = [];

    constructor(private httpClient: HttpClient) {
    }

    requestEmpList(): Observable<any> {
        return this.httpClient.get<any>('http://35.196.20.179/webapi/educationYear/getAllEducationYear');
    }

    requestEmpLists(empId) {
      return this.httpClient.get<any>('http://35.196.20.179/webapi/timeTable/getAllTimeTable/' + empId);
    }

    requestClass() {
        return this.httpClient.get('http://35.196.20.179/webapi/employee/getAll');
    }

    requestTeacher(usId, empId): Observable<any> {
        return this.httpClient.get('http://35.196.20.179/webapi/timeTable/getTeacherTimeTable/' + empId + '/' + usId );
    }

    // requestEmp(empId) {
    //     return this.httpClient.get<any>('http://35.196.20.179/webapi/course/getCourseAccEduId/' + empId);
    // }

    // requestData(usId) {
    //     return this.httpClient.get<any>('http://35.196.20.179/webapi/batch/getBatchOfCourseId/' + usId);
    // }

}
