import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { StudentService } from '../../services/student.service';
//import { Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})


export class StudentsListComponent {

  students: Student[] = [];

  //table cols header data
  tableColumns: string[] = [ 'id_', 'name' ,  'email' , 'course', 'actions'];

  constructor(public studentService: StudentService) {
    this.students = this.studentService.students;
  }

  //instance table data / angular material
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.studentService.students);

  handleEditStudent(){
    console.log('edit estudent')
  }

  handleRemove(){
    console.log('remove student')
  }

  //testing
  //(click)="onRowClicked(row)"
  onRowClicked(row: any) {
    console.log('Row clicked: ', row);
  }

}
