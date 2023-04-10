import { useSelector } from "react-redux";
import * as S from "../style/styleComponents";
import { useEffect, useState } from "react";

function Header() {
  const { refs } = useSelector((state) => state.refs);
  const [nowView, setNowView] = useState();

  useEffect(() => {
    if (refs.projectEl && refs.introEl && refs.contactEl) {
      const io = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setNowView(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-80px",
        }
      ); // 관찰자 초기화
      io.observe(refs.projectEl);
      io.observe(refs.introEl);
      io.observe(refs.contactEl);
    }
  }, [refs]);

  const onClick = (e) => {
    e.preventDefault();
    const name = e.target.name;
    refs[`${name}El`].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.Header id="header">
      <div className="container">
        <h1>
          <img src="/assets/logo.png" alt="logo" />
          SeungHye Portfolio
        </h1>
        <nav>
          <a
            onClick={onClick}
            className={nowView === "intro" ? "active" : ""}
            name="intro"
          >
            Profile
          </a>
          <a
            onClick={onClick}
            className={nowView === "projects" ? "active" : ""}
            name="project"
          >
            Works
          </a>
          <a
            onClick={onClick}
            className={nowView === "contact" ? "active" : ""}
            name="contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </S.Header>
  );
}

export default Header;
