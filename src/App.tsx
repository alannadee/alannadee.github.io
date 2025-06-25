import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import './styles.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary">
        <nav className="nav fixed w-screen z-100">
          <ul className="w-screen hover:animate-pulse transition ease-in font-caudex nav-links items-center justify-center mx-0 mb-0">
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/gallery">gallery</Link></li>
          </ul>
        </nav>

        <main className="mx-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

      <footer className="bg-primary h-100 text-white/50 p-20 mt-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-1 mx-auto">
                <h3 className="font-caudex italic text-sm">Hey! You've made it to the footer.</h3>
                <hr className="mt-5 max-w-[5vw]"></hr>
                
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
