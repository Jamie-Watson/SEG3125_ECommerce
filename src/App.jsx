import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import Cart from './pages/Cart';
import Survey from './pages/Survey';
import Item from './pages/Item';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  return (
    <Router>
      <div className="App vh-100">
        <Main sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/survey" element={<Survey />} />
          </Routes>
        </Main>
      </div>
    </Router>
  );
}

export default App;