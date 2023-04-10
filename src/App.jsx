import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import GlobalStyle from "./style/globalStyle";
import Contact from "./components/Contact";
import CommonFn from "./components/CommonFn";
import { Provider } from "react-redux";
import store from "./modules/store";

const Header = lazy(() => import("./components/Header"));
const Intro = lazy(() => import("./components/Intro"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      <Provider store={store}>
        <CommonFn>
          <Header />
          <Intro />
          <Projects />
          <Contact />
        </CommonFn>
      </Provider>
    </Suspense>
  );
}

export default App;
