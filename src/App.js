import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Axios from './components/axios/Axios';
import TodoList from './components/todolist/TodoList';
import { UsersProvider } from './components/axios/usersContext';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/axios">api</Link>
        </li>
        <li>
          <Link to="/todolist">todolist</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact component={Home} />
      <UsersProvider>
        <Route path="/axios" component={Axios} />
      </UsersProvider>
      <Route path="/todolist" component={TodoList} />
    </div>
  );
}

export default App;

