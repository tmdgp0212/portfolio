import * as S from "../style/styleComponents";

function Header() {
  return (
    <S.Header>
      <div className="container">
        <h1>
          <img src="/assets/logo.png" alt="logo" />
          SeungHye Portfolio
        </h1>
        <nav>
          <a className="active" href="#intro">
            Profile
          </a>
          <a href="#projects">Works</a>
          <a href="#Contact">Contact</a>
        </nav>
      </div>
    </S.Header>
  );
}

export default Header;
