import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Auth from './views/Auth';
import Home from './views/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Auth authRoute="login"/>}/>
        <Route path='/register' element={<Auth authRoute="register"/>}/>
        <Route path='/dashboard' element={<Home homeRoute='dashboard'/>} />
        <Route path='/profile' element={<Home homeRoute='profile'/>} />
        <Route path='/*' element={<Home homeRoute='dashboard'/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
