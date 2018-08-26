import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Authentication/authentication.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  EmployeeList = [];
  timetable = [];
  class = [];
  demo = [];
  usId;
  tId;


  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.requestEmpList().subscribe(
      (data) => {
        this.EmployeeList = data;
        console.log(data);
      }
    );
  }

  emp(empId) {
    this.authenticationService.requestEmpLists(empId).subscribe(
      (data) => {
        this.timetable = data.response;
      }
    );
  }

  user() {
    this.authenticationService.requestClass().subscribe(
      (data) => {
        this.authenticationService.getClass = data;
        console.log(data);
      }
    );
  }

  teacher() {
    this.authenticationService.requestTeacher(this.usId, this.tId).subscribe(
      (data) => {
        this.authenticationService.List = data.response;
        console.log(data.response);
      }
    );
  }

    // this.authenticationService.requestEmp(empId).subscribe(
    //   (data) => {
    //     this.class = data;
    //     // console.log(data);
    //     // console.log(data);
    //   }
    // );

}
