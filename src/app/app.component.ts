import { Component } from '@angular/core';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  public cod: number= 4;
  
  title = 'My ToDos Housework';
  todo= [{
    label: 'Bring Milk',
    done: false, 
    id: 1},
    {
      label: 'Pay mobile bill',
      done: true, 
      id: 2},
    {
        label: 'Clean house',
        done: false, 
        id: 3},
        {
          label: 'Fix the bulb',
          done: false, 
          id: 4}
  ];
 

  addTodo(newTodoLabel){
    var newTodo = {
      label: newTodoLabel,
      id: this.cod=this.cod +1,
      done: false
    };
    this.todo.push(newTodo);
  }

  deleteTodo(todo){
    this.todo=this.todo.filter( t => t.id !== todo.id);
  }

  editTask(idl: number){
    let label = this.todo[idl-1].label;
    let result = prompt("Edite el texto", label);
    if (result !== null && result !== ""){
      this.todo[idl-1].label = result;
    }
  }

  newFunction(text){
  alert("La tarea " +text + " esta hecha");
  }
}
