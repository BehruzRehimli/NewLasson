import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Layout from "./components/Layout"
import LayoutAdmin from './components/LayoutAdmin';
import Dashboard from "./pages/Dashboard"
import Login from './pages/Login';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Route>
          <Route path='/admin' element={<LayoutAdmin/>}>
            <Route path='/admin' element={<Dashboard/>}/>

          </Route>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
