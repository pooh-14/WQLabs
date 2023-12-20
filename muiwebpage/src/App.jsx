import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CheckIn from './Components/CheckIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/checkin' element={<CheckIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
