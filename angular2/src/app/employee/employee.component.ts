import { Component } from '@angular/core';

@Component({
    selector:"my-employee",
    templateUrl: "./employee.component.html"
})
export class EmployeeComponent {
    firstname = "Tom";
    lastname = "Hopkins";
    email = "bon4o@smotikata.com";
    gender = "Male";
    age = 20;
}
