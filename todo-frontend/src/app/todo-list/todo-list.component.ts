import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
task:any;
todos:any;
urlTasks ='http://localhost:8080/tasks';

constructor(private Http: HttpClient) {

  }
  createTask(description) {
    let todo : any = {'description':description.value};
    this.Http.post(this.urlTasks, todo).subscribe(
    response => {
    todo["id"] = response["id"];
   // this.todos.splice(4, 4, todo);
    
    }
    )
    }

createTodo(myform) {
  /////
  /*this.task = {
    'id':6,
    'description':'Get breakfast'
  }*/
 
   // this.task = myform.value;
    this.task ={
      'id': myform.value.todoId,
      'description': myform.value.todoDescription
    }
    //console.log(this.todos);
    
    this.Http.post(this.urlTasks, this.task).subscribe(
    response => {
    console.log(response);
    this.refeshListTodos();
     
      }
      )
  }
  updateTodo(todo) {
    this.Http.put(this.urlTasks+'/'+todo['id'], todo).subscribe(
    response => {
    console.log(todo);
    }
    )
    }
    deleteTodo(todo) {
      this.Http.delete(this.urlTasks + '/' + todo['id']).subscribe(
      response => {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index,1)
      //console.log(post);
      }
      )
    }
  
  ngOnInit(): void {
    this.Http.get(this.urlTasks).subscribe(
   response => {
   this.todos = response;
   console.log(this.todos);
   }
   )
   
  
 }
 refeshListTodos(){
  this.Http.get(this.urlTasks).subscribe(
    response => {
    this.todos = response;
    console.log(this.todos);
    }
    );
 }
}

