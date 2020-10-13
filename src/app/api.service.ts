import { TodoDto } from './DTO/todoDto';
import { TodoAttr } from './DTO/TodoAttr';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

private user = new ReplaySubject(1);
public user$ = this.user.asObservable();

constructor(private client: HttpClient) {
  this.client.get('https://localhost:5001/api/todo/login')
          //  .pipe(
          //    map((x) => x[0])
          //  )
           .subscribe(
             x=> {
              console.log(x);
              this.user.next(x);
             },
             error =>{
               console.log(error);
             },
             () => { console.log('End of Login')}
             );
}

GetTodoItems(): Observable<TodoDto[]>{
 return  this.client.get<TodoAttr[]>('https://localhost:5001/api/todo').pipe(
    map(x => x.map((attr) => new TodoDto(attr)))
    );
}


}

