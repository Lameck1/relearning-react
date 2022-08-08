import React, { useReducer, useState } from 'react';
import { useTheme } from './ThemeContext';

const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
  UPDATE_TODO: 'update_todo',
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      localStorage.setItem(
        'todos',
        JSON.stringify([...todos, newTodo(action.payload.name)]),
      );
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      localStorage.setItem(
        'todos',
        JSON.stringify(
          todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, complete: !todo.complete }
              : todo,
          ),
        ),
      );
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo,
      );
    case ACTIONS.DELETE_TODO:
      localStorage.setItem(
        'todos',
        JSON.stringify(todos.filter((todo) => todo.id !== action.payload.id)),
      );
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.UPDATE_TODO:
      localStorage.setItem(
        'todos',
        JSON.stringify(
          todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, name: action.payload.name }
              : todo,
          ),
        ),
      );
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.name }
          : todo,
      );
    default:
      return todos;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name,
    complete: false,
  };
}

function Todo() {
  const darkTheme = useTheme();

  const [todos, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('todos')) || [],
  );
  const [name, setName] = useState(() => '');

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
      setName('');
    }
  }

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return (
    <div style={themeStyles}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%' }}
        />
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <input
              type='checkbox'
              checked={todo.complete}
              onChange={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_TODO,
                  payload: { id: todo.id },
                })
              }
            />
            <span
              contentEditable={true}
              suppressContentEditableWarning={true}
              style={{
                textDecoration: todo.complete ? 'line-through' : 'none',
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  dispatch({
                    type: ACTIONS.UPDATE_TODO,
                    payload: { id: todo.id, name: e.target.innerText },
                  });
                }
              }}
              onBlur={(e) => {
                dispatch({
                  type: ACTIONS.UPDATE_TODO,
                  payload: { id: todo.id, name: e.target.innerText },
                });
              }}
            >
              {todo.name}
            </span>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.DELETE_TODO,
                  payload: { id: todo.id },
                })
              }
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
