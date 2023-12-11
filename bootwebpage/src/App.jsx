import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import Employees from './Components/Employees';


function App() {
  return (
    <div >
     <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/employees' element={<Employees/>}/>
     </Routes>
    </div>
  );
}

export default App;
