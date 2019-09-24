import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { TdformComponent } from './tdform/tdform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'emp-list',
    component: EmpListComponent
  },
  {
    path: 'department-list',
    component: DepartmentListComponent
  },
  {
    path: 'department-detail',
    component: DepartmentDetailComponent,
    children: [
      { path: 'department-overview', component: DepartmentOverviewComponent },
      { path: 'department-contact', component: DepartmentContactComponent }
    ]
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'tdform',
    component: TdformComponent
  },
  {
    path: 'reactiveform',
    component: ReactiveformComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepartmentListComponent,
  DepartmentDetailComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
  TdformComponent,
  ReactiveformComponent]
