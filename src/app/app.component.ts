import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  public cod: number= 4;
  
  title = 'My ToDos';
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

}
