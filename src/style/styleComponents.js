import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const faceInOut = keyframes`
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  20% {
    transform: translateY(0px);
    opacity: 1;
  }
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(10px);
    opacity: 0;
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
  box-shadow: ${({ shadow }) => shadow && "0 0 10px rgba(0,0,0,0.1)"};
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

      a {
        display: flex;
        align-items: center;

        img {
          display: block;
          width: 40px;
          height: 40px;
          margin-right: 5px;
        }

        span {
          @media (max-width: 640px) {
            display: none;
          }
        }
      }
    }

    nav {
      display: flex;
      align-items: center;
      cursor: default;

      a {
        display: block;
        padding: 4px 18px;

        &.active {
          color: var(--deep-purple);
          font-weight: 600;
        }
      }
    }
  }
`;

export const Intro = styled(motion.div)`
  .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    position: relative;
    margin: 0 auto;
    padding: 70px 40px 40px;
    width: 80vw;
    height: 101vh;
    min-height: 550px;

    @media (max-width: 1400px) {
      width: 90vw;
    }

    @media (max-width: 960px) {
      flex-direction: column;
      gap: 20px;
      width: 100vw;
    }

    @media (max-width: 640px) {
      height: initial;
    }

    .main__img {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      width: 400px;
      height: 400px;

      @media (max-width: 1200px) {
        width: 340px;
      }

      @media (max-width: 960px) {
        justify-content: flex-end;
        align-items: flex-end;
        width: 100%;
        height: 200px;
      }

      @media (max-width: 640px) {
        justify-content: center;
      }

      img {
        display: block;
        width: 100%;

        @media (max-width: 960px) {
          width: 30%;
        }

        @media (max-width: 640px) {
          width: 50%;
        }
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

        @media (max-width: 640px) {
          font-size: 20px;
          text-align: center;
        }

        .row {
          display: block;

          @media (max-width: 960px) {
            display: inline;
          }

          @media (max-width: 640px) {
            display: block;
          }

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
  }

  .scroll {
    position: absolute;
    width: 34px;
    height: 34px;
    left: 0;
    right: 0;
    bottom: 25px;
    margin: auto;
  }

  .copy {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    height: 40px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    animation: ${faceInOut} 1.5s;
  }
`;

export const Projects = styled(motion.div)`
  padding: 100px 60px;
  background-color: var(--white-purple);

  .title {
    height: 60px;
    font-size: var(--font-large);
    font-weight: 600;
    margin: 80px 40px;
    padding: 10px;
    text-align: center;
    border-bottom: 24px solid var(--light-purple);
  }

  > h3 {
    margin-bottom: 18px;
    padding: 20px;
    font-size: var(--font-large);
    font-weight: 600;
    text-align: center;
  }

  .projects__team {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .projects__personal {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin: 0 auto 60px;
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
      width: 438px;
      height: 240px;
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
      p {
        font-weight: 600;
        line-height: 2;
      }

      ul {
        li {
          line-height: 1.3;

          &:before {
            content: "•";
            margin-right: 8px;
          }
        }
      }
    }

    .links {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      margin-top: 20px;

      .warn {
        color: #f8312f;
        text-align: right;
        font-size: 12px;
      }

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
  justify-content: stretch;
  gap: 5px;
  margin: initial;
  padding: 10px;

  .thumbnail {
    position: initial;
    width: initial;
    height: initial;
    background: none;

    img {
      position: initial;
      width: 100%;
      height: 175px;
      object-fit: cover;
    }
  }

  .desc {
    width: initial;

    .title__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;

      h3 {
        font-size: 24px;
        line-height: 1.4;
      }

      .link {
        display: flex;
        gap: 10px;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          transition: transform 0.1s;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .summary {
    margin-top: 0px !important;

    .language {
      margin-bottom: 10px;
    }
  }

  .detail {
    li {
      line-height: 1.3;

      &:before {
        display: none;
      }
    }
  }
`;

export const Contact = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 102vh;
  line-height: 2;
  cursor: default;

  .card {
    padding: 40px 80px;
    color: #fff;
    background-color: var(--deep-purple);

    .link {
      display: flex;
      font-size: 20px;

      h3 {
        width: 80px;
      }
    }
  }

  h2 {
    font-size: var(--font-large);
    font-weight: 600;
  }
`;
