import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

const routes: Routes = [
  {
    path:'todoitem',
    component:TodoListItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
