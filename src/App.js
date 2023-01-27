import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { Header } from "components/header";
import { Home } from "routes/home";
import { Career } from "routes/career";
import { Quote } from "routes/quote";
import { Contact } from "routes/contact";
import { Offers } from "routes/offers";
import { Footer } from "components/footer";
import { OverlayContext } from "theme/context";

const BackgroundContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  overflow: hidden;
  z-index: -1;
`;
const App = () => {
  const [value, setValue] = useState(false);

  return (
    <div
      className="App"
      style={{ paddingBottom: "83px", position: "relative" }}
    >
      <OverlayContext.Provider value={{ value, setValue }}>
        <Header />
        <BackgroundContainer
          style={{ zIndex: value ? 10 : -1 }}
          isOpen={value}
        />
        <Routes styles={{ zIndex: "1" }}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Offers />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </OverlayContext.Provider>
    </div>
  );
};

export default App;
