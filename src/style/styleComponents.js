import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 10;

  img {
    width: 60px;
    height: 60px;
    animation: ${spin} 3s infinite linear;
  }
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #fff;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  z-index: 5;

  .container {
    display: flex;
    align-items: center;
    max-width: var(--max-width);
    height: 65px;
    margin: 0 auto;
    padding: 0 40px;

    h1 {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 600;
      line-height: 1;

      img {
        display: block;
        width: 40px;
        height: 40px;
        margin-right: 5px;
      }

      span {
        font-size: 32px;
      }
    }
  }
`;

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  position: relative;
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
      font-size: var(--font-large);
      font-weight: 600;
      line-height: 1.4;

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

          svg {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
  }

  .scroll {
    position: absolute;
    bottom: 25px;
  }
`;

export const Projects = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 40px;

  .title {
    height: 60px;
    font-size: var(--font-large);
    font-weight: 600;
    margin: 40px 40px 80px;
    padding: 10px;
    text-align: center;
    border-bottom: 24px solid var(--light-purple);
  }
`;

export const Project = styled.div`
  display: flex;
  justify-content: center;
  gap: 36px;
  margin: 0 auto 40px;
  padding: 40px;
  width: fit-content;
  border-radius: 10px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
  cursor: default;

  .thumbnail {
    position: relative;
    width: 500px;
    height: 300px;
    background-image: url("/assets/project_thmb/bg_macbook.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    img {
      display: block;
      position: absolute;
      top: 21px;
      left: 34px;
      width: 436px;
      height: 236px;
      border-radius: 3px;
    }
  }

  .desc {
    width: 550px;

    .project__scale {
      display: block;
      margin-bottom: 5px;
      padding: 5px 8px;
      width: fit-content;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      background-color: var(--deep-purple);
      border-radius: 4px;
    }

    h3 {
      font-size: var(--font-medium);
      font-weight: 600;
      line-height: 1.5;
    }

    .summary {
      margin: 10px 0;
      line-height: 1.5;

      li {
        display: flex;
        align-items: center;
        gap: 5px;

        img {
          border-radius: 4px;
        }
      }
    }

    .detail {
      li {
        line-height: 1.3;

        &:before {
          content: "•";
          margin-right: 8px;
        }
      }
    }

    .links {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      margin-top: 20px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3px;
        width: 100px;
        padding: 8px;
        color: #fff;
        text-align: center;
        font-size: 14px;
        background-color: var(--deep-purple);
        border-radius: 4px;

        svg {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
`;
