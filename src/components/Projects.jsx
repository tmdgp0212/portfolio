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
          {/*           <ProjectLarge
            team
            inProgress
            name="yeolda"
            title="열다 Yeolda"
            worker={"14인(FE 4, BE 3, UXUI 3, PM 4)"}
            date={"23.05.22 ~ "}
            language={["Next", "typescript"]}
            library={["zustand", "emotion", "framer-motion", "react-hook-form"]}
            github={"https://github.com/tmdgp0212/KDT-M4_Team2Project_Repo"}
            site={"https://next-furniture.vercel.app/"}
          >
            <p>프로젝트 소개</p>
            <ul>
              <li>
                실제 서비스 중인 기업의 문제점을 파악하고, 해결방안을 도출하여
                개선된 서비스 제작 및 제공
              </li>
            </ul>
            <p>상세 역할</p>
            <ul>
              <li>
                Frontend팀 내 리더를 담당하여 팀원들을 리드하고, 타 직군과의
                소통을 담당하였습니다
              </li>
            </ul>
          </ProjectLarge> */}
          <ProjectLarge
            team
            serverDown
            name="consolelog"
            title="연차/당직 관리 프로그램"
            worker={"9인(FE 5 / BE 4)"}
            date={"23.05.02 ~ 23.05.17"}
            language={["react", "typescript"]}
            library={["react-big-calendar", "msw", "axios", "emotion"]}
            github={"https://github.com/Kdt4-Miniproject/FE_Mini"}
            site={
              "http://clendarapp-env.eba-ej5a74yz.ap-northeast-2.elasticbeanstalk.com/ "
            }
          >
            <p>프로젝트 소개</p>
            <ul>
              <li>연차/당직을 신청하고 관리할 수 있는 프로그램입니다</li>
            </ul>
            <p>상세 역할</p>
            <ul>
              <li>
                react-big-calendar를 가공하여 연차와 당직정보가 표현되도록
                커스텀
              </li>
              <li>관리자 페이지의 유저정보 검색 및 수정기능 구현</li>
              <li>
                페이지의 전체적인 통일성 유지를 위해 레이아웃/디자인 컨벤션 작성
              </li>
            </ul>
          </ProjectLarge>
          <ProjectLarge
            team
            serverDown
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
        </div>

        <h3>Personal Projects</h3>

        <div className="projects__team">
          <ProjectLarge
            name="finedust"
            title="FineDustMap"
            worker={"1인"}
            date={"23.03.24 ~ 23.03.27"}
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
