import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './pages/Home';




function App() {
  useEffect(() => {
    AOS.init();

  }, [])
  return (

    <div className='content-container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
