import { createContext, lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import Loading from "./components/Loading";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";
import Intro from "./components/Intro";

export const pageContext = createContext();

function App() {
  const [page, setPage] = useState("/");

  return (
    <BrowserRouter>
      <AnimatePresence>
        <pageContext.Provider value={{ page, setPage }}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/works" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </pageContext.Provider>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
