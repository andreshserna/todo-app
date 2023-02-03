import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { todos, TodoModel } from './todos.states';
import { actions } from './todos.actions';

 export const todoReducer = createReducer(
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
  on(actions.deleteTodoAction,(state,todo)=> {
    let todos = state.filter((t)=> t.id != todo.id);
    return [...todos];
  }),
);



export const todosSelector = createSelector(createFeatureSelector("todos"),
  (todos: TodoModel[]) => todos

);
