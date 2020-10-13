import { ItemViewComponent } from './itemView/itemView.component';
import { TodoListComponent } from './todoList/todoList.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: TodoListComponent },
  { path: "view", component: ItemViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
