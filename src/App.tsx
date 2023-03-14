import Home from "./paginas/home/Home";
import Contato from "./paginas/contato/Contato";
import "./App.css";
import Navbar from "./components/statics/navbar/Navbar";
import Footer from "./components/statics/footer/Footer";
import QuemSomos from "./paginas/quemSomos/QuemSomos";
import Produtos from "./paginas/produtos/Produtos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kits from "./paginas/kits/Kits";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
