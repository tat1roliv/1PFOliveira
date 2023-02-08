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

}
