import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>

        <Route exact path='/login' element={ <Login/>}/>
        <Route exact path='/dashboard' element={ <Dashboard/>}/>
        
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
