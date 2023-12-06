import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import Common from './Components/Common';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Common/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
