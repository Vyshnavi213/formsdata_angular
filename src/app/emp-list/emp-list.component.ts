import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { EmployeeService } from '../employee.service';
import { EmployeeService} from '../employee.service';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  public employees = [];
  public errorMsg;
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getElement_data()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error);
  }

}
