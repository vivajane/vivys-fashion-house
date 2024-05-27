import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Categories from './pages/categories/Categories';




function App() {
  useEffect(() => {
    AOS.init();

  }, [])
  return (

    <div className='content-container'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/kid' element={<Categories category = "kid"/>}></Route>
        <Route path='/rtw' element={<Categories category= "Ready-to-wear"/>}></Route>
        <Route path='/bespoke' element={<Categories category ="Bespoke"/>}></Route>
        {/* <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
