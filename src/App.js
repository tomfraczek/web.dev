import { Route, Routes } from "react-router-dom";

import { Header } from "./components/header";
import { Home } from "./routes/home";
import { About } from "./routes/about";
import { Contact } from "./routes/contact";
import { Offer } from "./routes/offer";

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
    </div>
  );
};

export default App;
