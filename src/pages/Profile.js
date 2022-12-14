import styled, { keyframes } from "styled-components";
import Header from "../components/Header";
import NextBtn from "../components/NextBtn";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { FiUser, FiGift, FiMapPin, FiPhone } from "react-icons/fi";
import {
  FaHandPeace,
  FaPuzzlePiece,
  FaRegSmileWink,
  FaRegGrinBeamSweat,
  FaRegCommentDots,
} from "react-icons/fa";

const imagebouncing = keyframes`
  0%{transform: rotate(0deg);}
  50%{transform: rotate(-3deg);}
  100%{transform: rotate(0deg);}
`;

const righttoleft = keyframes`
  0%{transform: translateX(-600px)}
  100%{transform: translateX(0px)}
`;

const lefttoright = keyframes`
  0%{transform: translateX(600px)}
  100%{transform: translateX(0px)}
`;

const outlinePointer = keyframes`
  0%{outline-offset:0;}
  100%{outline-offset:5px;}
`;

const Wrapper = styled.section`
  > .container {
    position: relative;

    > button {
      margin: 0 auto;
    }
  }
`;

const Greeting = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }

  > .image {
    position: relative;
    margin-top: 30px;
    width: 500px;
    height: 400px;
    background-image: url(./assets/me.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.5s;
    z-index: 100;

    animation: ${imagebouncing} 0.8s 1s;

    @media screen and (max-width: 1200px) {
      width: 340px;
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      width: 280px;
      height: 250px;
    }

    &:hover {
      transform: rotate(-3deg);
    }

    &:after {
      display: block;
      position: absolute;
      top: 30px;
      right: 40px;
      width: 105px;
      height: 45px;
      background-image: url(./assets/arrow.png);
      background-size: contain;
      content: "";

      @media screen and (max-width: 1200px) {
        width: 70px;
        height: 30px;
      }

      @media screen and (max-width: 640px) {
        display: none;
      }
    }
  }

  > h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    font-size: 48px;
    cursor: default;

    @media screen and (max-width: 1200px) {
      font-size: 36px;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    @media screen and (max-width: 640px) {
      margin-left: 10px;
      word-break: keep-all;
      align-items: flex-start;
    }

    > span:first-child {
      animation: ${righttoleft} 1.3s ease-out;
      z-index: 0;
    }
    > span:last-child {
      display: block;
      transition: transform 0.8s;
      animation: ${lefttoright} 1.3s ease-out;

      > b {
        position: relative;

        &:after {
          content: "";
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #bcaa90;
          transition: 0.2s all;
        }
      }
    } //span

    &:hover {
      > span > b:after {
        width: 100%;
      }
    }
  } //h3
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 150px;

  @media screen and (max-width: 768px) {
    margin: 80px 0 150px;
  }

  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }

  > .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    font-size: 18px;
    font-family: "Pretendard-Regular";
    border-right: 1px solid #bcaa90;
    cursor: default;

    @media screen and (max-width: 768px) {
      width: 140px;
      font-size: 16px;
    }

    @media screen and (max-width: 640px) {
      width: 170px;
      height: 50px;
      border-right: none;
      flex-direction: row;
    }

    &:nth-child(1) {
      border-left: 1px solid #bcaa90;

      @media screen and (max-width: 640px) {
        border-left: none;
      }
    }

    > svg {
      position: relative;
      margin-bottom: 25px;
      font-size: 22px;

      @media screen and (max-width: 768px) {
        margin-bottom: 15px;
        font-size: 18px;
      }

      @media screen and (max-width: 640px) {
        margin-bottom: 0;
        margin-right: 10px;
      }
    } //svg
  } //.info
`;

const Experience = styled.div`
  margin-bottom: 100px;
  padding-bottom: 50px;
  cursor: default;

  > h4 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 50px;
  }

  > .flexbox {
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > .text {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 20px;
      font-family: "Pretendard-Regular";

      @media screen and (max-width: 768px) {
        width: fit-content;
        flex-direction: column;
        order: 200;
      }

      > .exprnce {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        font-size: 18px;
        text-align: center;

        @media screen and (max-width: 768px) {
          margin: 22px 0;
          font-size: 16px;
          text-align: left;
        }

        &::after {
          display: block;
          position: absolute;
          width: 14px;
          height: 14px;
          left: 50%;
          bottom: -29px;
          margin-left: -7px;
          background-color: #bcaa90;
          border-radius: 50%;
          content: "";

          @media screen and (max-width: 768px) {
            left: -22px;
            bottom: 20px;
          }
        }

        &.now {
          font-size: 20px;
          font-weight: 600;

          @media screen and (max-width: 1200px) {
            font-size: 18px;
          }
        }

        &.now::after {
          background-color: #3f2e1c;
          outline: 1px solid #3f2e1c;
          outline-offset: 5px;
          animation: ${outlinePointer} 1s infinite;
        }

        > .year {
          margin-top: 10px;
          order: 100;

          @media screen and (max-width: 768px) {
            order: 0;
          }
        }

        > .rank {
          font-size: 16px;
          line-height: 1.4;

          @media screen and (max-width: 1200px) {
            font-size: 14px;
          }
        }
      }
    }

    > .bar {
      display: block;
      width: 100%;
      height: 4px;
      background-color: #bcaa90;
      border-radius: 5px;

      @media screen and (max-width: 768px) {
        width: 4px;
        height: 500px;
        order: 100;
      }
    }
  }
`;

const Comments = styled.div`
  width: fit-content;
  margin: 0 auto 100px;
  cursor: default;

  > .cmnt {
    margin-bottom: 50px;

    > h4 {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      font-size: 36px;

      @media screen and (max-width: 1200px) {
        font-size: 28px;
      }

      > svg {
        margin-left: 10px;
      }
    }

    > p {
      padding: 0 20px;
      font-size: 22px;
      font-family: "Pretendard-Regular";
      line-height: 1.4;
      word-break: keep-all;

      @media screen and (max-width: 1200px) {
        font-size: 18px;
      }

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }

      &:hover {
        > strong:after {
          width: 100%;
        }
      }

      > span {
        display: block;

        @media screen and (max-width: 1200px) {
          display: initial;
        }
      }

      > strong {
        position: relative;

        &:after {
          content: "";
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 3px;
          background: #bcaa90;
          border-radius: 5px;
          transition: 0.2s all;
        }
      }
    }
  }
`;

const Profile = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/whatican");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <Greeting>
          <div className="image"></div>
          <h3>
            <span>?????? ??????????????? ?????????</span>
            <span>
              <b>?????????</b>?????????.
            </span>
          </h3>
        </Greeting>
        <InfoContainer>
          <div className="info">
            <FiUser />
            ?????????
          </div>
          <div className="info">
            <FiGift />
            1995.02.12
          </div>
          <div className="info">
            <FiMapPin />
            ????????? ?????????
          </div>
          <div className="info">
            <FiPhone />
            010.5390.3029
          </div>
        </InfoContainer>
        <Experience>
          <h4>????????? ???</h4>
          <div className="flexbox">
            <div className="text">
              <div className="exprnce">
                <span className="year">2014</span>
                <span>?????????????????????</span>
                <span className="rank">???????????? ??????</span>
              </div>
              <div className="exprnce">
                <span className="year">2015</span>
                <span>???????????? ??????</span>
                <span className="rank">??????</span>
              </div>
              <div className="exprnce">
                <span className="year">2018</span>
                <span>??????????????????</span>
                <span className="rank">??????</span>
              </div>
              <div className="exprnce">
                <span className="year">2021</span>
                <span>??????????????????</span>
                <span className="rank">?????????</span>
              </div>
              <div className="exprnce now">
                <span className="year">2022</span>
                <span>???????????????????????????</span>
                <span className="rank">???????????????/??????????????? ?????? ??????</span>
              </div>
            </div>
            <span className="bar"></span>
          </div>
        </Experience>
        <Comments>
          <div className="cmnt">
            <h4>
              Intro <FaRegCommentDots />
            </h4>
            <p>
              <b>??? ????????? ?????? ?????????????</b> <FaRegGrinBeamSweat /> <br />
              ?????? ????????? ????????? ?????? it??? ??????????????? ????????? ??? ??????????????????.
              <br /> ?????? ???????????? ??? ??????????????????, ??????????????? ??? ????????? ?????????
              ??? ?????? ????????? ????????? ??????????????????.
              <br />
              ???????????? ??? ????????? ?????? ???????????? ??? ?????? ?????? ??? ????????? ?????????,{" "}
              <br />
              ???????????? ?????? ???????????? ??? ??????, ??? ?????????{" "}
              <strong>???????????? ?????? ??????</strong>??? ??????????????????.
            </p>
          </div>
          <div className="cmnt">
            <h4>
              Strength <FaHandPeace />
            </h4>
            <p>
              ?????? ??????
              <strong> ????????? ?????? ????????? ???????????? ?????? ??????</strong>??? ?????????
              ?????? ?????? ??? ???????????????.
              <br />
              ???????????? ????????? "?????? ??????!" ?????? ???????????? ????????? ????????? ?????????
              ?????? ????????? ??? ????????????. <br />
              ????????? ????????? ????????? ??????????????? ???????????? ????????? ?????? ????????????
              ??????????????? ??? ????????? ??? ??? ?????????.
            </p>
          </div>
          <div className="cmnt">
            <h4>
              Puzzle <FaPuzzlePiece />
            </h4>
            <p>
              ?????? ????????? ?????????????????? ??????????????????, ??????????????? ?????????
              ??????????????? ????????????????????????. <br />
              ????????? ????????? ????????? ????????? ??????
              <strong> "????????? ?????? ??????????????????!"</strong> ?????? ??????????????????.
              <br />
              ????????? ????????? ????????? ????????? ????????????, ????????? ???????????? ??? ??????
              ???????????? ???????????? ????????? <br />
              ????????? ????????? ??? ?????? ???????????? ????????? ???????????? ??? ??? ?????????
              ??????????????? ?????????. <br />
              ????????? ????????? ?????? ?????? ??? ????????? ?????? ????????? ?????????{" "}
              <b>????????? ????????? ?????????</b>??? ?????? ????????????.
            </p>
          </div>
          <div className="cmnt">
            <h4>
              Will be <FaRegSmileWink />
            </h4>
            <p>
              ????????? ????????? ????????? ????????? ?????? ???????????? ???, ??? 2??? ???????????? ??????
              ????????? ???????????????. <br /> ???????????? ?????? ??????{" "}
              <strong>???????????? ???????????? ?????? ???????????? ?????????</strong>??? ?????????
              ???????????????. <br />
              ?????? ???????????? ????????? ????????? ???????????? ??????, ????????? ????????? ????????????
              <b> ?????? ????????? ?????? ??????</b>??? ???????????????.
            </p>
          </div>
        </Comments>
        <NextBtn text={"What I Can"} onClick={onClick} />
      </div>
    </Wrapper>
  );
};

export default Profile;
