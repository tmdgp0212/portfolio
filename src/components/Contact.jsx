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
        Contact
      </S.Contact>
    </>
  );
}

export default Contact;
