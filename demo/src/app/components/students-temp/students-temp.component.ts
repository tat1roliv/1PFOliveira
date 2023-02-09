import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students-temp',
  templateUrl: './students-temp.component.html',
  styleUrls: ['./students-temp.component.css']
})

export class StudentsTempComponent {

 @Input() studentsTemp: Student[] = [];

  constructor(public studentService: StudentService) {
    this.studentsTemp = this.studentService.students;
  }

  @Output() outStudent: EventEmitter<Student> = new EventEmitter<Student>();

  id_!: string;
  name!: string;
  lastName!: string;
  email!: string;
  course!: string;

  addStudentTemp(){
    let newStudent: Student = {
      id_: this.id_,
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      course: this.course,
    }
    //console.log('add student' , newStudent);
    this.studentService.addStudent(newStudent);
  }


}
