import { Component, Input, OnInit } from '@angular/core';
import { TodoDto } from '../DTO/todoDto';
import { ApiService } from './../api.service';
import { Observable } from 'rxjs';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-todoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.scss']
})
export class TodoListComponent implements OnInit {

  items: TodoDto[];// = [ new TodoDto( { content:"jablko" ,header: "co na dzisiaj" })]
  itemsObservable: Observable<TodoDto[]>;
  displayedColumns: string[] = ['Content','Header'];

  @Input('mat-sort-header')id: string 

  constructor(private api: ApiService) { }

  sortData(sort: Sort) {
      //console.log(sort);
  }

  onClick(id: string){
    console.log(id);
  }

  ngOnInit() {
    this.itemsObservable = this.api.GetTodoItems();

    // this.api.GetTodoItems().subscribe(
    //   x=> { this.items = x }
    // );
  }

}
