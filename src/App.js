import { Route, Routes, useLocation } from "react-router-dom";

import { Header } from "components/header";
import { Home } from "routes/home";
import { About } from "routes/about";
import { Contact } from "routes/contact";
import { Offer } from "routes/offer";
import { Footer } from "components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
