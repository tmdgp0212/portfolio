import { BsArrowUpRight } from "react-icons/bs";
import { CreateBadge } from "../util/CreateBadge";
import * as S from "../style/styleComponents";

function ProjectMedium({
  team,
  name,
  title,
  language,
  library,
  github,
  site,
  children,
}) {
  return (
    <S.ProjectMedium>
      <div className="thumbnail">
        <img src={`/assets/project_thmb/${name}.png`} alt={name} />
      </div>
      <div className="desc">
        <h3>{title}</h3>
        <ul className="detail">{children}</ul>
        <ul className="summary">
          <li className="language">
            {language.map((lan, idx) => (
              <CreateBadge key={idx} lan={lan} />
            ))}
          </li>
          <li className="library">
            {library.map((lib, idx) => (
              <span key={idx} className="gray-box">
                {lib}
              </span>
            ))}
          </li>
        </ul>
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
    </S.ProjectMedium>
  );
}

export default ProjectMedium;
