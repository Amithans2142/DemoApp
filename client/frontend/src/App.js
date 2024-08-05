import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetUser from './components/GetUser';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <Routes>

    <Route path="/users" element={<GetUser/>}/>
    <Route path="/add" element={<AddUser/>}/>

      </Routes>
    </div>
  );
}

export default App;
