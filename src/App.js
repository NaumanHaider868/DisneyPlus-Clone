import './App.css';
import Login from './componets/Login';
import { Routes, Route } from 'react-router-dom'
import Header from './componets/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
