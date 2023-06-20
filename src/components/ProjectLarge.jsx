import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { CreateBadge } from "../util/CreateBadge";
import * as S from "../style/styleComponents";

function ProjectLarge({
  team,
  inProgress,
  serverDown,
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
          <li>작업인원: {worker}</li>
          <li>작업기간: {date}</li>
          <li>
            사용기술:{" "}
            {language.map((lan, idx) => (
              <CreateBadge key={idx} lan={lan} />
            ))}
          </li>
          <li>
            라이브러리:{" "}
            {library.map((lib, idx) => (
              <span key={idx} className="gray-box">
                {lib}
              </span>
            ))}
          </li>
        </ul>
        <div className="detail">{children}</div>
        <div className="links">
          {!serverDown && (
            <a target="_blank" href={site}>
              Site
              <FiExternalLink />
            </a>
          )}
          <a target="_blank" href={github}>
            Github
            <BsGithub />
          </a>
        </div>
      </div>
    </S.ProjectLarge>
  );
}

export default ProjectLarge;
