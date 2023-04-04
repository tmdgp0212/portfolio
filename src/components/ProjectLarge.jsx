import { BsArrowUpRight } from "react-icons/bs";
import { CreateBadge } from "../util/CreateBadge";
import * as S from "../style/styleComponents";

function ProjectLarge({
  team,
  name,
  title,
  worker,
  date,
  language,
  library,
  github,
  site,
  children,
}) {
  return (
    <S.ProjectLarge>
      <div className="thumbnail">
        <img src={`/assets/project_thmb/${name}.gif`} alt={name} />
      </div>
      <div className="desc">
        <span className="project__scale">
          {team ? "Team Project" : "Personal Project"}
        </span>

        <h3>{title}</h3>

        <ul className="summary">
          <li>작업인원: {worker}인</li>
          <li>작업기간: {date}</li>
          <li>
            사용언어:{" "}
            {language.map((lan, idx) => (
              <CreateBadge key={idx} lan={lan} />
            ))}
          </li>
          <li>라이브러리: {library}</li>
        </ul>
        <ul className="detail">{children}</ul>
        <div className="links">
          <a target="_blank" href={github}>
            Github
            <BsArrowUpRight />
          </a>
          <a target="_blank" href={site}>
            Site
            <BsArrowUpRight />
          </a>
        </div>
      </div>
    </S.ProjectLarge>
  );
}

export default ProjectLarge;
