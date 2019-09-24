import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/orders/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  user: any;
  dataSource: any;
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'avatar'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private userservice: UserService) {
  }
  ngOnInit() {
    this.userservice.getuser().subscribe(data => {
      //console.log(data['data']);
      this.user = data['data'];
      if (this.user) {
        this.dataSource = new MatTableDataSource<any>(this.user);
        this.dataSource.paginator = this.paginator;
      }
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
