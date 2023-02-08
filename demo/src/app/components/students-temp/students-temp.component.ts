import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students-temp',
  templateUrl: './students-temp.component.html',
  styleUrls: ['./students-temp.component.css']
})

export class StudentsTempComponent {

  studentsTemp: Student[] = [];

  constructor(public studentService: StudentService) {
    this.studentsTemp = this.studentService.list();
  }

/*
  studentsTemp: Student[] = [
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

*/
}
