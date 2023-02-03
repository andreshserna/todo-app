import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel, todos } from '../../providers/todos.states';
import { todosSelector } from '../../providers/todos.reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos:TodoModel[] = [];

  constructor(private store: Store) {  }

  ngOnInit(): void {

  }

  loadTodos() {
    this.store.select(todosSelector).subscribe((state) => this.todos = state);
  }
}

