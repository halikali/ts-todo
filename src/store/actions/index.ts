import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export const addTodo = (todo: string) => {
  addDoc(collection(db, "todos"), {
    todo,
    status: "active",
  });
};

export const getAllTodo = () => {
  return async (dispatch: any) => {
    dispatch({ type: "GET_TODO_REQUEST" });
    try {
      let todosArray: any[] = [];

      const querySnapshot = await getDocs(collection(db, "todos"));
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: "GET_TODO_SUCCESS", payload: todosArray });
    } catch {
      dispatch({ type: "GET_TODO_FAILURE", error: "bir hata oluştu" });
    }
  };
};

export const completeTodo = (id: string) => {
  return () => {
    updateDoc(doc(collection(db, "todos"), id), {
      status: "completed",
    });
  };
};

export const notCompleteTodo = (id: string) => {
  return () => {
    updateDoc(doc(collection(db, "todos"), id), {
      status: "active",
    });
  };
};

export const delTodo = (id: string) => {
  return async () => {
    await deleteDoc(doc(collection(db, "todos"), id));
  };
};

export const softDelTodo = (id: string) => {
  return async () => {
    await updateDoc(doc(collection(db, "todos"), id), {
      status: "deleted",
    });
  };
};

export const updateTodo = (id: string, content: string) => {
  return () => {
    updateDoc(doc(collection(db, "todos"), id), { todo: content });
  };
};

export const setInputType = (inputType: string) => {
  return (dispatch: any) => {
    dispatch({ type: "SET_INPUT_TYPE", payload: inputType });
  };
};

export const setSearchText = (text: string) => {
  return (dispatch: any) => {
    dispatch({ type: "SET_SEARCH_TEXT", payload: text });
  };
};

export const setFilter = (filter: string) => {
  return (dispatch: any) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };
};

export const setCount = (count: number) => {
  return (dispatch: any) => {
    dispatch({ type: "SET_COUNT", payload: count });
  };
};
