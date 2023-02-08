import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  /*public API = '/demo/src/assets/db.json';*/

  constructor(public httpClient: HttpClient) { }

  /*
  list() {
    return this.httpClient.get<Student[]>(this.API);
  }
  */

  list(): Student[] {
    return [
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
    ]
  }


}
