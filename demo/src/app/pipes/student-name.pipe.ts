import { Pipe, PipeTransform } from '@angular/core';
import { StudentService } from '../services/student.service';

@Pipe({
  name: 'studentName'
})
export class StudentNamePipe implements PipeTransform {

  transform(name: string): any {
    let nameEdit: string;
    nameEdit = name.toUpperCase();
    //console.log(nameEdit);
    return nameEdit;
  }

}
