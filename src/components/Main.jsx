import { BsEnvelopeAt, BsTelephoneFill, BsGithub } from "react-icons/bs";
import { copyText } from "../constants/copyText";
import * as S from "../style/styleComponents";

function Main() {
  return (
    <S.Main>
      <div className="main__img">
        <img src="/assets/me2.png" alt="me" />
      </div>
      <div className="main__txt">
        <h2>
          <span className="row">" 사용자 친화적인 서비스를 만들고 싶은</span>
          <span className="row">
            프론트엔드 개발자 <b>조승혜</b>입니다 "
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
    </S.Main>
  );
}

export default Main;
