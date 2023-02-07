import { Component } from '@angular/core';
import { Student } from '../../models/student';

import { MatTableDataSource } from '@angular/material/table';

//import { Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})


export class StudentsListComponent {

students: Student[] = [
    {
      name: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@test.com',
      course: 'Angular',
    },
    {
      name: 'Alan',
      lastName: 'Turing',
      email: 'a.turing@test.com',
      course: 'C',
    },
    {
      name: 'Robert',
      lastName: 'Martin',
      email: 'unclebob@test.com',
      course: 'Java',
    },
    {
      name: 'Tim',
      lastName: 'Berners-Lee ',
      email: 'tim@test.com',
      course: 'React',
    },
    {
      name: 'Grace',
      lastName: 'Hopper',
      email: 'hopper@test.com',
      course: 'Cobol',
    },


  ];

  //instance table data / angular material
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.students);

  //table cols header data
  tableColumns: string[] = [ 'name' , 'lastName' , 'email' , 'course', 'actions'];

  handleEditStudent(){
    console.log('edit estudent')
  }

  handleRemove(){
    console.log('remove student')
  }

  //(click)="onRowClicked(row)"
  onRowClicked(row: any) {
    console.log('Row clicked: ', row);
  }

}
