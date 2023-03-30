import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  .container {
    max-width: 1480px;
    height: 60px;
    margin: 0 auto;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  width: 100vw;
  height: 100vh;
  min-height: 400px;

  .main__img {
    display: flex;
    align-items: center;
    width: 400px;
    height: 400px;

    img {
      display: block;
      width: 100%;
    }
  }

  .main__txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    cursor: default;

    h2 {
      margin-bottom: 56px;
      font-size: 36px;
      font-weight: 600;
      text-align: right;

      .row {
        display: block;

        b {
          font-size: 40px;
          color: var(--deep-purple);
        }
      }
    }

    .main__profile {
      display: flex;
      justify-content: right;
      gap: 20px;

      .profile__item {
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
        }

        a {
          display: flex;
          align-items: center;
          gap: 5px;

          svg,
          img {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
  }
`;
