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
              <li>SNS기반의 그림일기장 앱 입니다</li>
              <li>
                Node.js기반의 Express를 활용하여 RESTful API를 구현하였습니다
              </li>
              <li>
                서버에서 구현한 API를 기반으로 SNS기반의 그림일기장을
                구현하였습니다
              </li>
              <li>
                AWS서비스를 사용해 데이터를 저장하고, 프로젝트를 배포하였습니다
              </li>
              <li>JWT방식의 유저인증을 구현하였습니다</li>
            </ul>
            <p>상세 역할</p>
            <ul>
              <li>유저테이블 관련한 모든 백엔드 기능 설계 및 구현</li>
              <li>
                프로젝트에서 사용 될 전체 api를 axios로 연동, 정리하여
                팀원들에게 배포
              </li>
              <li>
                axios에 인터셉터를 설정하여 api요청 전 쿠키에 담아 둔 Access
                Token 정보를 헤더에 담아 전송
              </li>
              <li>
                포스트 상세보기, 댓글 작성 페이지 및 유저 검색 페이지 구현
              </li>
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
              <li>프론트엔드 개발자 5명이 함께한 가구쇼핑몰 입니다</li>
              <li>
                순수자바스크립트 문법과 API통신에 대한 역량향상 목적으로
                진행되었습니다
              </li>
              <li>
                로그인과, 유저토큰을 활용한 사용자 인증 기능을 구현하였습니다
              </li>
              <li>가구데이터를 등록하고, 수정하거나 구매할 수 있습니다</li>
            </ul>
            <p>상세 역할</p>
            <ul>
              <li>페이지의 전체적인 레이아웃/디자인 컨벤션 작성</li>
              <li>메인페이지, 카테고리 별 페이지, 검색 페이지 전체 구현</li>
              <li>마이페이지의 유저 정보 수정페이지 구현</li>
            </ul>
          </ProjectLarge>
        </div>

        <h3>Personal Projects</h3>

        <div className="projects__personal">
          <ProjectMedium
            name="calendar"
            title="Diary Calendar"
            language={["react"]}
            library={["redux", "react-router-dom", "styled-component"]}
            github={"https://github.com/tmdgp0212/Diary_Calendar"}
            site={"https://tmdgp0212.github.io/Diary_Calendar"}
          >
            <li>
              일기데이터는 로컬스토리지에 저장되며 수정과 삭제가 가능합니다
            </li>
            <li>캘린더형, 리스트형 보기로 전환이 가능합니다</li>
          </ProjectMedium>
          <ProjectMedium
            name="finedust"
            title="FineDustMap"
            language={["react"]}
            library={["redux", "axios", "react-router-dom", "styled-component"]}
            github={"https://github.com/tmdgp0212/FineDustMap"}
            site={"https://whimsical-sfogliatella-62bbe0.netlify.app/"}
          >
            <li>공공API를 활용한 미세먼지 정보 앱</li>
            <li>Redux를 활용하여 데이터를 관리하였습니다</li>
          </ProjectMedium>
          <ProjectMedium
            name="musicplayer"
            title="Music Player"
            language={["react"]}
            library={["redux", "styled-component", "framer-motion"]}
            github={"https://github.com/tmdgp0212/30projects"}
            site={"https://peppy-eclair-b38986.netlify.app/"}
          >
            <li>audio객체를 활용한 뮤직플레이어앱</li>
            <li>Redux를 활용하여 데이터를 관리하였습니다</li>
          </ProjectMedium>
          <ProjectMedium
            name="todolist"
            title="ToDo List"
            language={["javascript"]}
            library={["parcel", "SortableJS", "SCSS"]}
            github={"https://github.com/tmdgp0212/ToDoList-ver.2"}
            site={"https://sparkling-kangaroo-110e7a.netlify.app/"}
          >
            <li>API를 활용하여 서버에 데이터가 저장됩니다</li>
            <li>
              아이템추가, 수정, 삭제등 CRUD형식을 익히기 위해 제작되었습니다
            </li>
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
            name="drowingboard"
            title="Lets Draw!"
            language={["javascript"]}
            library={["Scss"]}
            github={"https://github.com/tmdgp0212/30projects"}
            site={"https://tranquil-semifreddo-5b67db.netlify.app/"}
          >
            <li>canvas로 만든 그림판입니다</li>
          </ProjectMedium>
          <ProjectMedium
            name="busanonna"
            title="BusanOnna"
            language={["javascript"]}
            github={"https://github.com/tmdgp0212/busanonna"}
            site={"https://funny-malabi-8ebb7a.netlify.app/"}
          >
            <li>
              퍼블리싱을 배우며 컨텐츠 구상과 디자인부터 제작까지 시도해본 순수
              창작 부산여행 가이드 페이지 입니다
            </li>
          </ProjectMedium>
          <ProjectMedium
            name="rockscissorspaper"
            title="가위 바위 보"
            language={["javascript"]}
            github={"https://github.com/tmdgp0212/rock-scissors-paper"}
            site={"https://tmdgp0212.github.io/rock-scissors-paper/"}
          >
            <li>자바스크립트를 배워 처음으로 만들어 본 개인 프로젝트입니다</li>
            <li>
              가위바위보의 로직을 짜면서 컴퓨터의 시선에서 사고하고 계산하는
              법을 익혔습니다
            </li>
          </ProjectMedium>
        </div>
        <h3>Clone Projects</h3>

        <div className="projects__personal">
          <ProjectMedium
            name="netflix"
            title="Netflix"
            language={["react"]}
            library={["framer-motion", "react-router-dom", "styled-components"]}
            github={"https://github.com/tmdgp0212/netflix"}
            site={"https://tmdgp0212.github.io/netflix/"}
          >
            <li>framer-motion으로 인터렉션 모션 구현</li>
            <li>api를 활용하여 영화 검색이 가능합니다</li>
          </ProjectMedium>
          <ProjectMedium
            name="kakao"
            title="Kakao Corp"
            language={["javascript"]}
            library={["jQuery"]}
            github={"https://github.com/tmdgp0212/Kakao-corp"}
            site={"https://tmdgp0212.github.io/Kakao-corp/"}
          >
            <li>스크롤에 따라 다양하게 반응하는 동적 웹 구현</li>
            <li>디바이스의 크기에 따라 레이아웃이 변화하는 반응형 웹 구현</li>
          </ProjectMedium>
          <ProjectMedium
            name="sandoll"
            title="Sandoll-cloud"
            language={["javascript"]}
            library={["Scss"]}
            github={"https://github.com/tmdgp0212/Sandoll-cloud"}
            site={"https://tmdgp0212.github.io/Sandoll-cloud/"}
          >
            <li>드롭다운 메뉴와 모달창(검색창) 구현</li>
            <li>다양한 슬라이드 구현</li>
          </ProjectMedium>
          <ProjectMedium
            name="freewill"
            title="FREEWILL"
            language={["javascript", "jQuery"]}
            library={["Scss"]}
            github={"https://github.com/tmdgp0212/FREEWILL"}
            site={"https://tmdgp0212.github.io/FREEWILL/"}
          >
            <li>디바이스의 크기에 따라 레이아웃이 변화하는 반응형 웹 구현</li>
            <li>스크롤에 따라 요소가 fade되는 이벤트 구현</li>
            <li>keyframe을 활용한 팝업 애니메이션 구현</li>
          </ProjectMedium>
        </div>
      </S.Projects>
    </>
  );
}

export default Projects;
