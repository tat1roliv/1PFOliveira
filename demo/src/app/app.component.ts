import { Component } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor( public studentService: StudentService ){ }
  addEstudiante(){
    let newStudent: Student = {
      id_: 'teste',
      name: 'teste',
      lastName: 'teste',
      email: 'teste@com',
      course: 'teste',
    }
    this.studentService.addStudent(newStudent);
  }
}
