import * as S from "../style/styleComponents";

function Header() {
  return (
    <S.Header>
      <div className="container">
        <h1>
          <img src="/assets/logo.png" alt="logo" />
          SeungHye Portfolio
        </h1>
      </div>
    </S.Header>
  );
}

export default Header;
