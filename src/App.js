import { Route, Routes } from "react-router-dom";

import { Header } from "components/header";
import { Home } from "routes/home";
import { About } from "routes/about";
import { Contact } from "routes/contact";
import { Offers } from "routes/offers";
import { Footer } from "components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
