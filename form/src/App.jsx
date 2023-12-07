import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
