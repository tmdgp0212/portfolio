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
    justify-content: space-between;
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

    nav {
      a {
        &.active {
          color: var(--deep-purple);
          font-weight: 600;
        }
        & + a:before {
          padding: 20px;
          content: " ››› ";
        }
      }
    }
  }
`;

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  position: relative;
  margin: 0 auto;
  padding: 40px;
  width: 80vw;
  height: 100vh;
  min-height: 500px;

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
    gap: 28px;
    flex-grow: 1;
    cursor: default;

    h2 {
      font-size: var(--font-medium);
      font-weight: 600;
      line-height: 1.4;

      .row {
        display: block;

        b {
          color: var(--deep-purple);
        }
      }
    }

    .profile {
      .profile__item {
        display: flex;
        padding: 10px 0;

        & + .profile__item {
          border-top: 1px solid var(--light-gray);
        }

        .info__title {
          display: block;
          width: 200px;
          font-weight: 600;
          flex-shrink: 0;
        }

        .info__body {
          &.list-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .gray-box {
            padding: 2px 8px;
            font-size: 14px;
            background-color: var(--light-gray);
            border-radius: 3px;
          }

          .exp {
            margin-bottom: 10px;

            span {
              display: block;
            }
          }
        }
      }
    }

    .main__buttons {
      display: flex;
      justify-content: right;
      gap: 20px;

      .button__item {
        color: #333;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.05);

          &.phone {
            color: #34a853;
          }
          &.mail {
            color: #ea4335;
          }
          &.github {
            color: #000;
          }
          &.velog {
            color: #20c997;
          }
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
  /* max-width: var(--max-width);
  margin: 0 auto; */
  padding: 40px;
  background-color: var(--white-purple);

  .title {
    height: 60px;
    font-size: var(--font-large);
    font-weight: 600;
    margin: 40px 40px 80px;
    padding: 10px;
    text-align: center;
    border-bottom: 24px solid var(--light-purple);
  }

  .projects__large {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .projects__medium {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    padding: 0 40px;
    width: 100%;
    max-width: var(--max-width);
  }
`;

export const ProjectLarge = styled.div`
  display: flex;
  justify-content: center;
  gap: 36px;
  margin: 0 auto 60px;
  padding: 40px;
  width: fit-content;
  background-color: #fff;
  border-radius: 5px;
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
        flex-wrap: wrap;
        align-items: center;
        gap: 5px;

        img {
          border-radius: 4px;
        }

        .gray-box {
          padding: 0px 6px;
          font-size: 14px;
          background-color: var(--light-gray);
          border-radius: 3px;
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

export const ProjectMedium = styled(ProjectLarge)`
  flex-direction: column;
  gap: 5px;
  padding: 10px;

  .thumbnail {
    width: initial;
    height: initial;
    background: none;

    img {
      position: initial;
      width: 100%;
      height: initial;
    }
  }

  .desc {
    width: initial;

    h3 {
      font-size: 24px;
      line-height: 1.4;
    }
  }

  .summary {
    .language {
      margin-bottom: 10px;
    }
  }

  .links {
    justify-content: center;

    a {
      width: 100%;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
