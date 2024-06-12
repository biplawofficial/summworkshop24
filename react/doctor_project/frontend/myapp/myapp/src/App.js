
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Home/loginRegister/login'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
