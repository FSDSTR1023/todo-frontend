import React from 'react';
import './tailwind.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


// Placeholder components for routes
function TodoListPage() {
  return <div className="p-4">Todo List Page</div>;
}

function AddTodoPage() {
  return <div className="p-4">Add Todo Page</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-blue-500 text-white p-4 text-xl">
          TODO Application
        </header>
        <Switch>
          <Route path="/add-todo">
            <AddTodoPage />
          </Route>
          <Route path="/">
            <TodoListPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
