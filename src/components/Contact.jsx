import { useLocation, useNavigate } from "react-router-dom";
import * as S from "../style/styleComponents";
import Header from "./Header";
import { useContext, useEffect } from "react";
import { throttle } from "lodash";
import { pageContext } from "../App";

function Contact() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setPage } = useContext(pageContext);

  const handleScroll = throttle(() => {
    if (window.scrollY < 5) {
      navigate("/works");
    }
  }, 300);

  useEffect(() => {
    window.scrollTo(0, 10);
    setPage(location.pathname);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <S.Contact
        initial={{ y: window.innerHeight }}
        animate={{ y: 0 }}
        exit={{ y: -window.innerHeight }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="card">
          <div className="link tel">
            <h3>Tel.</h3>
            <p>010.5390.3029</p>
          </div>
          <div className="link email">
            <h3>Email.</h3>
            <p>tmdgp0212@naver.com</p>
          </div>
          <div className="link github">
            <h3>Github.</h3>
            <p>
              <a href="https://github.com/tmdgp0212" target="_blink">
                https://github.com/tmdgp0212
              </a>
            </p>
          </div>
        </div>
        <h2>CONTACT ME.</h2>
      </S.Contact>
    </>
  );
}

export default Contact;
