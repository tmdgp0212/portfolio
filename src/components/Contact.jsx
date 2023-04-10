import { useDispatch } from "react-redux";
import * as S from "../style/styleComponents";
import { useEffect, useRef } from "react";
import { regRef } from "../modules/refs";

function Contact() {
  const dispatch = useDispatch();
  const contactEl = useRef();

  useEffect(() => {
    dispatch(regRef({ name: "contactEl", ref: contactEl }));
  }, [contactEl]);

  return (
    <S.Contact ref={contactEl} id="contact">
      Contact
    </S.Contact>
  );
}

export default Contact;
