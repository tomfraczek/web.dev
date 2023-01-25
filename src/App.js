import { Route, Routes } from "react-router-dom";

import { Header } from "components/header";
import { Home } from "routes/home";
import { Career } from "routes/career";
import { Quote } from "routes/quote";
import { Contact } from "routes/contact";
import { Offers } from "routes/offers";
import { Footer } from "components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Offers />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
