import { BsEnvelopeAt, BsTelephoneFill, BsGithub } from "react-icons/bs";
import { copyText } from "../util/copyText";
import * as S from "../style/styleComponents";

function Intro() {
  return (
    <S.Intro>
      <div className="main__img">
        <img src="/assets/me2.png" alt="me" />
      </div>
      <div className="main__txt">
        <h2>
          <span className="row">
            " <b>소통</b>과 <b>배려</b>를 중시하며,
          </span>
          <span className="row">
            <b>사용자 친화적 서비스</b>를 추구하는 개발자 "
          </span>
        </h2>
        <div className="main__profile">
          <div
            className="profile__item"
            onClick={() => copyText("전화번호", "01053903029")}
          >
            <a>
              <BsTelephoneFill />
            </a>
          </div>
          <div
            className="profile__item"
            onClick={() => copyText("메일주소", "tmdgp0212@naver.com")}
          >
            <a>
              <BsEnvelopeAt />
            </a>
          </div>
          <div className="profile__item">
            <a href="https://github.com/tmdgp0212" target={"_blank"}>
              <BsGithub />
            </a>
          </div>
          <div className="profile__item">
            <a href="https://velog.io/@tmdgp0212" target={"_blank"}>
              <img src="/assets/velog.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="scroll">아래로 스크롤</div>
    </S.Intro>
  );
}

export default Intro;
