import {
  BsEnvelopeAt,
  BsTelephoneFill,
  BsGithub,
  BsVimeo,
} from "react-icons/bs";
import { copyText } from "../util/copyText";
import * as S from "../style/styleComponents";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { throttle } from "lodash";

function Intro() {
  const navigate = useNavigate();

  const handleScroll = throttle(() => {
    if (window.scrollY > window.innerHeight * 0.02) {
      navigate("/works");
    }
  }, 300);

  useEffect(() => {
    window.scrollTo(0, 0);
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
                  {["HTML", "CSS", "JavaScript"].map((lang, idx) => (
                    <span className="gray-box" key={idx}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="profile__item">
                <span className="info__title">🛠️Library & Framework</span>
                <div className="info__body list-container">
                  {[
                    "React",
                    "jQuery",
                    "TypeScript",
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
                    웹퍼블리셔/프론트엔드 과정 수강
                  </p>
                  <p className="exp">
                    <span>22.12.12-23.06.30</span> 패스트캠퍼스 메가바이트스쿨
                    프론트엔드 4기 수강
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
                onClick={() => copyText("전화번호", "01053903029")}
              >
                <a>
                  <BsTelephoneFill />
                </a>
              </div>
              <div
                className="button__item mail"
                onClick={() => copyText("메일주소", "tmdgp0212@naver.com")}
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
        <div className="bottom"></div>
      </S.Intro>
    </>
  );
}

export default Intro;
