import { FiExternalLink } from "react-icons/fi";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
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
        <div className="title__container">
          <h3>{title}</h3>
          <div className="link">
            <a target="_blank" href={site}>
              <BsLink45Deg />
            </a>
            <a target="_blank" href={github}>
              <BsGithub />
            </a>
          </div>
        </div>
        <ul className="summary">
          <li className="language">
            {language.map((lan, idx) => (
              <CreateBadge key={idx} lan={lan} />
            ))}
          </li>
          <li className="library">
            {library &&
              library.map((lib, idx) => (
                <span key={idx} className="gray-box">
                  {lib}
                </span>
              ))}
          </li>
        </ul>
        <ul className="detail">{children}</ul>
      </div>
    </S.ProjectMedium>
  );
}

export default ProjectMedium;
