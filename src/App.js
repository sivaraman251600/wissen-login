import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.component';
import UserList from './components/UserList/UserList.component';
import NavComponent from './components/Nav/Nav.component';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/users' element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
