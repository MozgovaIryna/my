
import './App.css';
import{BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Register from './pages/Register';
/* import { firebaseConfig } from './firebase.config'; */

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
          <Routes>
         
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
