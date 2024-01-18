import React from 'react';
import {Route,Switch} from 'react-router-dom';
import MainNav from '../src/componenets/MainNav/MainNav';
import Home from './pages/HomePage';
import Audio from './pages/Audio';
import Cart from './pages/Cart';
import Laptops from './pages/Laptops';
import Lifestyle from './pages/Lifestyle';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Phones from './pages/Phones';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import TV from './pages/TV';
import CreateItem from './pages/CreateItem';
import UpdateProfile from './pages/Update-profile';
import Result from './pages/result';
import ForgotPassword from './pages/ForgotPassword';
import {AuthProvider} from './contexts/AuthContext';
import {BrowserRouter} from 'react-router-dom';
//import { Counter } from './features/counter/Counter';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <div className="App">
        <MainNav />
        <Switch>
    <Route path='/' exact>
      <Home />
    </Route>
    <Route path='/result' exact>
      <Result />
    </Route>
    <Route path='/audio'>
      <Audio />
    </Route>
    <Route path='/cart'>
      <Cart />
    </Route>
    <Route path='/laptops'>
      <Laptops />
    </Route>
    <Route path='/lifestyle'>
      <Lifestyle />
    </Route>
    <Route path='/createItem'>
      <CreateItem />
    </Route>
    <Route path='/login'>
      <Login />
    </Route>
    <Route path='/orders'>
      <Orders />
    </Route>
    <Route path='/phones'>
      <Phones />
    </Route>
    <Route path='/profile'>
      <Profile />
    </Route>
    <Route path='/reset'>
      <ForgotPassword />
    </Route>
    <Route path='/update-profile'>
      <UpdateProfile />
    </Route>
    <Route path='/signup'>
      <Signup />
    </Route>
    <Route path='/tv'>
      <TV />
    </Route>
    </Switch>
    </div>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

/* 
      <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>

*/