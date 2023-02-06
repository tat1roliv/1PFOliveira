import { Component } from '@angular/core';
import { Student } from '../../models/student';

import { MatTableDataSource } from '@angular/material/table';

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
      isActive: true,
    },
    {
      name: 'Alan',
      lastName: 'Turing',
      email: 'a.turing@test.com',
      course: 'C',
      isActive: true,
    },
    {
      name: 'Robert',
      lastName: 'Martin',
      email: 'unclebob@test.com',
      course: 'Java',
      isActive: true,
    },
    {
      name: 'Tim',
      lastName: 'Berners-Lee ',
      email: 'tim@test.com',
      course: 'React',
      isActive: false,
    },
    {
      name: 'Grace',
      lastName: 'Hopper',
      email: 'hopper@test.com',
      course: 'Cobol',
      isActive: true,
    },


  ];

  //instance table data / angular material
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.students);

  //table cols header data
  tableColumns: string[] = [ 'name' , 'lastName' , 'email' , 'course', 'isActive' , 'actions'];

  //constructor(private dialog: MatDialog){}

}
