import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Pages
import Home from './pages/Home';
import InteriorWork from './pages/InteriorWork';
import CeilingWork from './pages/CeilingWork';
import WallWork from './pages/WallWork';
import KitchenWork from './pages/KitchenWork';

import MaterialSupply from './pages/MaterialSupply';
import Gypsum from './pages/Gypsum';
import Panels from './pages/Panels';
import Decorative from './pages/Decorative';

import Projects from './pages/Projects';
import About from './pages/About';
import GetQuote from './pages/GetQuote';

const Layout = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Header />
    <main style={{ flex: 1 }}>
      <Outlet />
    </main>
    <Footer />
    <WhatsAppWidget />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="interior-work">
            <Route index element={<InteriorWork />} />
            <Route path="ceiling-work" element={<CeilingWork />} />
            <Route path="wall-decorative-work" element={<WallWork />} />
            <Route path="modular-kitchen-furniture" element={<KitchenWork />} />
          </Route>

          <Route path="material-supply">
            <Route index element={<MaterialSupply />} />
            <Route path="gypsum-boards-ceiling-materials" element={<Gypsum />} />
            <Route path="panels" element={<Panels />} />
            <Route path="decorative-materials" element={<Decorative />} />
          </Route>

          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="get-quote" element={<GetQuote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
