import * as S from "../style/styleComponents";
import Project from "./Project";

function Projects() {
  return (
    <S.Projects>
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="projects__team">
        <Project
          team
          name="nextfurniture"
          title="Next Furniture"
          worker={5}
          date={"23.01.30 ~ 23.03.03"}
          language={["html", "javascript", "SCSS"]}
          library={"Vercel, Parcel, Swiper, Navigo"}
          github={"https://github.com/tmdgp0212/KDT-M4_Team2Project_Repo"}
          site={"https://next-furniture.vercel.app/"}
        >
          <li>프론트엔드 개발자 5명이 함께한 가구쇼핑몰 입니다</li>
          <li>
            순수자바스크립트 문법과 API통신에 대한 역량향상 목적으로
            진행되었습니다
          </li>
          <li>로그인과, 유저토큰을 활용한 사용자 인증 기능을 구현하였습니다</li>
          <li>가구데이터를 등록하고, 수정하거나 구매할 수 있습니다</li>
          <li>메인페이지, 상세페이지, 마이페이지 구현을 담당하였습니다</li>
        </Project>
      </div>
    </S.Projects>
  );
}

export default Projects;
