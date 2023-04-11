import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import Loading from "./components/Loading";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";

const Intro = lazy(() => import("./components/Intro"));

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AnimatePresence>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/works" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
