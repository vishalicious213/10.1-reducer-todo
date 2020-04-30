import React from 'react';
import './App.css';
// import { reducer, initialState } from './reducers/ToDoReducer';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <div>-To Do List-</div>
      <ToDoList />
    </div>
  );
}

export default App;
