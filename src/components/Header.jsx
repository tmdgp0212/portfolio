import * as S from "../style/styleComponents";

function Header() {
  return (
    <S.Header>
      <div className="container">
        <h1>
          <img src="/assets/logo.png" alt="logo" />
          SeungHye
          <br />
          Portfolio
        </h1>
      </div>
    </S.Header>
  );
}

export default Header;
