import {
  BsEnvelopeAt,
  BsTelephoneFill,
  BsGithub,
  BsVimeo,
} from "react-icons/bs";
import * as S from "../style/styleComponents";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { throttle } from "lodash";
import { pageContext } from "../App";

function Intro() {
  const navigate = useNavigate();
  const location = useLocation();
  const copyRef = useRef();
  const { setPage } = useContext(pageContext);

  const copy = (text, name) => {
    window.navigator.clipboard.writeText(text);

    copyRef.current.textContent = `${name}가 복사되었습니다`;
    copyRef.current.style.display = "flex";

    setTimeout(() => {
      copyRef.current.style.display = "none";
    }, 1500);
  };

  const handleScroll = throttle(() => {
    if (window.scrollY > document.body.offsetHeight - window.innerHeight - 5) {
      navigate("/works");
    }
  }, 300);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <S.Intro
        initial={{ y: -window.innerHeight }}
        animate={{ y: 0 }}
        exit={{ y: window.innerHeight }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="contents">
          <div className="main__img">
            <img src="/assets/me2.png" alt="me" />
          </div>
          <div className="main__txt">
            <h2>
              <span className="row">" 안녕하세요👋🏼</span>
              <span className="row">
                <b>프론트엔드 개발자</b> 조승혜입니다 "
              </span>
            </h2>
            <div className="profile">
              <div className="profile__item">
                <span className="info__title">📖Language</span>
                <div className="info__body list-container">
                  {["HTML", "CSS", "JavaScript", "TypeScript"].map(
                    (lang, idx) => (
                      <span className="gray-box" key={idx}>
                        {lang}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="profile__item">
                <span className="info__title">🛠️Library & Framework</span>
                <div className="info__body list-container">
                  {[
                    "React",
                    "jQuery",
                    "Next.js",
                    "redux",
                    "axios",
                    "react-query",
                    "framer-motion",
                    "styled-components",
                    "Scss",
                  ].map((lang, idx) => (
                    <span className="gray-box" key={idx}>
                      {lang}
                    </span>
                  ))}
                  ...
                </div>
              </div>
              <div className="profile__item">
                <span className="info__title">💡Experience</span>
                <div className="info__body">
                  <p className="exp">
                    <span>22.06.07-22.10.26</span> 이젠컴퓨터아카데미 UI/UX
                    웹퍼블리셔 양성 과정 수강
                  </p>
                  <p className="exp">
                    <span>22.12.12-23.06.30</span> 패스트캠퍼스 프론트엔드 중급
                    부트캠프 수강
                  </p>
                </div>
              </div>
              <div className="profile__item">
                <span className="info__title">🚩Goals</span>
                <div className="info__body">
                  소통과 배려를 중시하며,사용자 친화적 서비스를 추구합니다
                </div>
              </div>
            </div>
            <div className="main__buttons">
              <div
                className="button__item phone"
                onClick={() => copy("01053903029", "전화번호")}
              >
                <a>
                  <BsTelephoneFill />
                </a>
              </div>
              <div
                className="button__item mail"
                onClick={() => copy("tmdgp0212@naver.com", "메일주소")}
              >
                <a>
                  <BsEnvelopeAt />
                </a>
              </div>
              <div className="button__item github">
                <a href="https://github.com/tmdgp0212" target={"_blank"}>
                  <BsGithub />
                </a>
              </div>
              <div className="button__item velog">
                <a href="https://velog.io/@tmdgp0212" target={"_blank"}>
                  <BsVimeo />
                </a>
              </div>
            </div>
          </div>
          <div className="scroll">
            <img src="/assets/double-down.gif" alt="scroll down" />
          </div>
        </div>

        <div className="copy" ref={copyRef}>
          복사되었습니다
        </div>
      </S.Intro>
    </>
  );
}

export default Intro;
