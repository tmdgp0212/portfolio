import { useContext, useEffect, useRef } from "react";
import * as S from "../style/styleComponents";
import Header from "./Header";
import ProjectLarge from "./ProjectLarge";
import ProjectMedium from "./ProjectMedium";
import { throttle } from "lodash";
import { useNavigate } from "react-router-dom";
import { pageContext } from "../App";

function Projects() {
  const navigate = useNavigate();
  const { page } = useContext(pageContext);

  const fromIntro = {
    hidden: { y: window.innerHeight },
    visible: { y: 0 },
  };

  const fromContact = {
    hidden: { y: -window.innerHeight, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleScroll = throttle(() => {
    if (window.scrollY < 5) {
      navigate("/");
    }

    if (window.scrollY >= document.body.offsetHeight - window.innerHeight - 5) {
      navigate("/contact");
    }
  }, 300);

  useEffect(() => {
    if (page === "/") {
      window.scrollTo(0, 15);
    } else {
      window.scrollTo(0, document.body.offsetHeight - window.innerHeight - 25);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <S.Projects
        initial="hidden"
        animate="visible"
        variants={page === "/" ? fromIntro : fromContact}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="title">
          <h2>Works</h2>
        </div>

        <h3>Team Projects</h3>

        <div className="projects__team">
          <ProjectLarge
            team
            name="moodlog"
            title="Moodlog"
            worker={"4인(FE)"}
            date={"23.04.14 ~ 23.04.28"}
            language={["React", "Typescript", "Node.js", "Express"]}
            library={[
              "Axios",
              "React-query",
              "React-router-dom",
              "typeorm",
              "AWS",
            ]}
            github={"https://github.com/REACT-2/Moodlog-FE-WEB"}
            site={
              "http://moodlog-env-fe.eba-a73kg2hr.ap-northeast-2.elasticbeanstalk.com/"
            }
          >
            <p>프로젝트 소개</p>
            <ul>
              <li>
                무드로그는 하루에 하나씩 다양한 무드 아이콘과 함께 나의 하루를
                그림으로 기록할 수 있는 SNS기반의 그림일기장 앱 입니다.
              </li>
            </ul>
            <p>상세 역할</p>
            <ul>
              <li>
                프로젝트에서 사용 될 전체 api를 모듈화하여 재사용성을 높임
              </li>
              <li>
                포스트 상세보기, 댓글 작성 페이지 및 유저 검색 페이지를 구현
              </li>
              <li>JWT방식의 유저인증을 구현</li>
              <li>Node.js기반의 Express를 활용하여 RESTful API를 구현</li>
            </ul>
          </ProjectLarge>
          <ProjectLarge
            team
            name="nextfurniture"
            title="Next Furniture"
            worker={"5인(FE)"}
            date={"23.01.30 ~ 23.03.03"}
            language={["javascript"]}
            library={["Vercel", "SwiperJS", "Navigo", "Scss"]}
            github={"https://github.com/tmdgp0212/KDT-M4_Team2Project_Repo"}
            site={"https://next-furniture.vercel.app/"}
          >
            <p>프로젝트 소개</p>
            <ul>
              <li>
                넥스트퍼니쳐는 결제수단을 등록하고, 가구를 구매할 수 있는
                가구쇼핑몰 입니다
              </li>
              <li>순수 자바스크립트로 제작되었습니다</li>
            </ul>
            <p>상세 역할</p>
            <ul>
              <li>
                가구데이터를 가공하여 메인페이지, 카테고리 별 페이지, 검색
                페이지로 나누어 구현
              </li>
              <li>마이페이지의 유저 프로필 수정 페이지 구현</li>
              <li>
                페이지의 전체적인 통일성 유지를 위해 레이아웃/디자인 컨벤션을
                작성
              </li>
            </ul>
          </ProjectLarge>
        </div>

        <h3>Personal Projects</h3>

        <div className="projects__team">
          <ProjectLarge
            name="calendar"
            title="Diary Calendar"
            worker={"1인"}
            date={"22.09.29 ~ 22.10.05"}
            language={["react"]}
            library={["redux", "react-router-dom", "styled-component"]}
            github={"https://github.com/tmdgp0212/Diary_Calendar"}
            site={"https://tmdgp0212.github.io/Diary_Calendar"}
          >
            <p>프로젝트 소개</p>
            <ul>
              <li>나의 하루를 기록할 수 있는 달력형태의 일기장입니다</li>
            </ul>
            <p>상세 역할</p>
            <ul>
              <li>일기데이터는 로컬스토리지에 저장되며 수정과 삭제가 가능</li>
              <li>redux를 활용하여 다이어리의 상태를 관리</li>
              <li>캘린더형 보기, 리스트형 보기로 전환이 가능</li>
            </ul>
          </ProjectLarge>
          <ProjectLarge
            name="finedust"
            title="FineDustMap"
            worker={"5인(FE)"}
            date={"22.09.29 ~ 22.10.05"}
            language={["react"]}
            library={["redux", "axios", "react-router-dom", "styled-component"]}
            github={"https://github.com/tmdgp0212/FineDustMap"}
            site={"https://whimsical-sfogliatella-62bbe0.netlify.app/"}
          >
            <p>프로젝트 소개</p>
            <ul>
              <li>
                시/도별 미세먼지 정보를 조회할 수 있는 미세먼지 알리미 앱 입니다
              </li>
            </ul>
            <p>상세 역할</p>
            <ul>
              <li>공공API를 활용하여 미세먼지 데이터 공급</li>
              <li>Redux를 활용하여 데이터의 상태 관리</li>
              <li>localStorage에 즐겨찾기, 내 지역 정보 저장</li>
            </ul>
          </ProjectLarge>
        </div>

        <h3>etc...</h3>

        <div className="projects__personal">
          <ProjectMedium
            name="musicplayer"
            title="Music Player"
            language={["react"]}
            library={["redux", "styled-component", "framer-motion"]}
            github={"https://github.com/tmdgp0212/30projects"}
            site={"https://peppy-eclair-b38986.netlify.app/"}
          >
            <li>Audio API를 활용한 뮤직플레이어앱</li>
            <li>Redux를 활용하여 데이터를 관리하였습니다</li>
          </ProjectMedium>
          <ProjectMedium
            name="drowingboard"
            title="Lets Draw!"
            language={["javascript"]}
            library={["Scss"]}
            github={"https://github.com/tmdgp0212/30projects"}
            site={"https://tranquil-semifreddo-5b67db.netlify.app/"}
          >
            <li>canvas API를 활용한 그림판입니다</li>
          </ProjectMedium>
          <ProjectMedium
            name="findmovie"
            title="Find Movie!"
            language={["javascript"]}
            library={["Scss"]}
            github={"https://github.com/tmdgp0212/FIND-MOVIE"}
            site={"https://tangerine-medovik-e674b3.netlify.app/"}
          >
            <li>순수 자바스크립트로 구현한 영화검색페이지</li>
            <li>무한스크롤기능, 연도별 영화 검색 기능 구현</li>
          </ProjectMedium>
          <ProjectMedium
            name="kakao"
            title="Kakao Corp"
            language={["javascript"]}
            library={["jQuery"]}
            github={"https://github.com/tmdgp0212/Kakao-corp"}
            site={"https://tmdgp0212.github.io/Kakao-corp/"}
          >
            <li>Kakao corp 페이지를 Clone하였습니다</li>
            <li>스크롤에 따라 다양하게 반응하는 동적 웹 구현</li>
            <li>디바이스의 크기에 따라 레이아웃이 변화하는 반응형 웹 구현</li>
          </ProjectMedium>
        </div>
      </S.Projects>
    </>
  );
}

export default Projects;
