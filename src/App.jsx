import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import GlobalStyle from "./style/globalStyle";
import Contact from "./components/Contact";

const Header = lazy(() => import("./components/Header"));
const Intro = lazy(() => import("./components/Intro"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      <Header />
      <Intro />
      <Projects />
      <Contact />
    </Suspense>
  );
}

export default App;
