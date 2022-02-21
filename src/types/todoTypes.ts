import { DocumentData } from "firebase/firestore";
import { ThunkDispatch } from "redux-thunk";

export interface TodoState {
  todos: Todo[];
  error: string;
  isLoad: boolean;
}

export interface Todo {
  id: string;
  todo: string;
  completed: boolean;
  deleted?: boolean;
}

interface Get_Todo_start {
  type: "GET_TODO_REQUEST";
}

interface Get_Todo_Success {
  type: "GET_TODO_SUCCESS";
  payload: any[];
}

interface Get_Todo_Failure {
  type: "GET_TODO_FAILURE";
  error: string;
}

export type TodoActionType =
  | Get_Todo_start
  | Get_Todo_Success
  | Get_Todo_Failure;

export type TodoDispatch = DocumentData;
