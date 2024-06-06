import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Aboutus from './components/Aboutus';
import Service from './components/Service';
import Book from './components/Book';
import Contact from './components/Contact';
import Faq from './components/Faq';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Aboutus" element={<Aboutus/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/Book" element={<Book/>}/>
      </Routes></BrowserRouter>
   
  );
}

export default App;
