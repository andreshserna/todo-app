import { createReducer, on } from "@ngrx/store";
import { todos } from './todos.states';
import { actions } from './todos.actions';

const todoReducer = createReducer(
  todos,
  on(actions.addTodoAction,(state,todo)=> {
    return [...state , todo];
  }),
  on(actions.updateTodoAction,(state,todo)=> {
    let tempTodoIndex = state.findIndex((t)=>t.id == todo.id);
    if(tempTodoIndex != -1){
      state[tempTodoIndex] = todo;
    }

    return [...state];
  }),

);
