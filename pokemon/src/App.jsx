import { PokemonProvider } from './context/PokemonContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dex from './pages/Dex.jsx';
import Home from './pages/Home.jsx';
import PokemonDetail from './pages/PokemonDetail.jsx';
import './App.css';

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App
