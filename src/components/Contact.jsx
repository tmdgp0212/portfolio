import { useNavigate } from "react-router-dom";
import * as S from "../style/styleComponents";
import Header from "./Header";
import { useEffect } from "react";
import { throttle } from "lodash";

function Contact() {
  const navigate = useNavigate();

  const handleScroll = throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY < 5) {
      navigate("/works");
    }
  }, 300);

  useEffect(() => {
    window.scrollTo(0, 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Contact
      initial={{ y: window.innerHeight }}
      animate={{ y: 0 }}
      exit={{ y: -window.innerHeight }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <Header />
      Contact
    </S.Contact>
  );
}

export default Contact;
