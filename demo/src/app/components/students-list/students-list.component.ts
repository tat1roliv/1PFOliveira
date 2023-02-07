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
      id_: '1',
      name: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@test.com',
      course: 'Angular',
    },
    {
      id_: '2',
      name: 'Alan',
      lastName: 'Turing',
      email: 'a.turing@test.com',
      course: 'C',
    },
    {
      id_: '3',
      name: 'Robert',
      lastName: 'Martin',
      email: 'unclebob@test.com',
      course: 'Java',
    },
    {
      id_: '4',
      name: 'Tim',
      lastName: 'Berners-Lee ',
      email: 'tim@test.com',
      course: 'React',
    },
    {
      id_: '5',
      name: 'Grace',
      lastName: 'Hopper',
      email: 'hopper@test.com',
      course: 'Cobol',
    },


  ];

  //instance table data / angular material
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.students);

  //table cols header data
  tableColumns: string[] = [ 'id_', 'name' , 'lastName' , 'email' , 'course', 'actions'];

  handleEditStudent(){
    console.log('edit estudent')
  }

  handleRemove(){
    console.log('remove student')

  }


  onRowClicked(row: any) {
    console.log('Row clicked: ', row);
    console.log(this.students.toString());

  }

}
