import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'department',
    'position',
    'salary',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList(); // Update employee list after dialog close
        }
      },
    });
  }

  // ฟังก์ชันดึงข้อมูลพนักงานจาก API และจัดการกับ MatTableDataSource
  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        // ตรวจสอบว่า res มีคีย์ 'employees' และ 'employees' เป็น array หรือไม่
        if (res && Array.isArray(res.employees)) {
          this.dataSource = new MatTableDataSource(res.employees);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        } else {
          console.error('Response does not contain employees array:', res);
        }
      },
      error: (err) => {
        console.error('Error fetching employee list:', err);
      },
    });
  }  

  // ฟังก์ชันค้นหาข้อมูลในตาราง
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // ฟังก์ชันลบข้อมูลพนักงาน
  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getEmployeeList(); // Refresh employee list after delete
      },
      error: (err) => {
        console.error('Error deleting employee:', err);
      },
    });
  }

  // ฟังก์ชันเปิดฟอร์มสำหรับการแก้ไขข้อมูลพนักงาน
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList(); // Refresh employee list after edit
        }
      },
    });
  }
}
