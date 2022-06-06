import React from "react";
import styled from "styled-components";
import Typography from "../../typography";
import Flex from "../Flex";
import Image from "next/image";
import PeterFirstImage from "../../assets/PeterFirstPicture.png";
import PeterFirstImageBg from "../../assets/FirstPicturebg.png";
import PeterAndreImag2 from "../../assets/PeterAndreImage2.png";
import SecondAboutImageBg from "../../assets/SecondAboutImage-bg.png";
import { devices, mediaQueries } from "../../themes/mediaQueries";
import useMediaQuery from "../../hooks/useMediaQuery";

const Wrapper = styled.div`
  background: linear-gradient(180deg, #703fff 0%, rgba(37, 191, 255, 0) 100%);
  margin-top: 13.4rem;
  background-size: 100% 40%;
  background-repeat: no-repeat;

  ${mediaQueries.phone} {
    margin-top: 6.2rem;
    background-size: 100% 20%;
  }

  .image-container {
    width: 100%;

    @media screen and (min-width: 2000px) {
     max-width: 30%;
    }
  }

  .first-section {
    margin-top: 11.7rem;

    ${mediaQueries.phone} {
      margin-top: 7rem;
    }
  }
  .second-section {
    margin-top: 5.9rem;

    ${mediaQueries.phone} {
      margin-top: 9.6rem;
    }
  }
`;

const LeftImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 72.5rem;
  .left-image-bg {
    position: absolute;
    top: 33%;
    left: 21.3%;
    transform: translate(-21.3%, -33%)
    left: 0px;
    height: 66.75%;
    width: 78.7%;
    z-index: -1;
  }

  .left-image-container {
    position: relative;
    height: 85.4%;
    max-width: 96.8%;
  }
  ${mediaQueries.tabport} {
    height: 50rem;
    max-width: 90%;
}
  ${mediaQueries.phone} {
    max-width: 80%;
    margin-right: auto; 
    max-height: 34.8rem;
  }
`;

const RightImageWrapper = styled.div`
  position: relative;
  height: 66.7rem;
  width: 100%;
  margin-left: auto;
  @media screen and (min-width: 2000px) {
    height: 100rem;
   }
  .image {
    height: 93%;
    position: absolute;
    top: 50%;
    right: 0%;
    width: 94.1%;
    transform: translate(-0%, -50%);
  }

  ${mediaQueries.tabport} {
    max-width: 90%;
    height: 50rem;
  }

  ${mediaQueries.phone} {
    max-width: 88%;
    height: 33.9rem;
  }
`;

const About = () => {
  const isMobile = useMediaQuery(devices.phone);

  return (
    <Wrapper id="about">
      {isMobile ? (
        <Typography font="h1" as="h1" align="center" pt="13.3rem">
          ABOUT <br /> PETER ANDRE
        </Typography>
      ) : (
        <Typography font="h1" as="h1" align="center" pt="13.3rem">
          ABOUT PETER
        </Typography>
      )}
      <Flex
        justifyContent="space-between"
        flex={"1 1 0px"}
        className="first-section"
        direction={isMobile ? "column" : ""}
        gap={isMobile ? "9.6rem" : ""}
      >
        <div className="image-container">
          <LeftImageWrapper>
            <div className="left-image-container">
              <Image alt="first-image" src={PeterFirstImage} layout="fill" />
            </div>
            <div className="left-image-bg">
              <Image alt="first-image" src={PeterFirstImageBg} layout="fill" />
            </div>
          </LeftImageWrapper>
        </div>
        <Flex>
          <div>
            <Typography
              font="h3"
              as="h2"
              fontSize="4.8rem"
              align={isMobile ? "center" : "left"}
            >
              PETER ANDRE
            </Typography>
            <Typography
              font="bodyText"
              as="p"
              style={{
                maxWidth: "48.7rem",
              }}
              mt={isMobile ? "2rem" : "3.8rem"}
              align={isMobile ? "center" : "left"}
              px={isMobile ? "6.7rem" : ""}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              hendrerit elit quis tincidunt euismod. Maecenas at feugiat ante.
              Nullam velit erat, molestie at felis vel, blandit tempor sem.
              Nulla dapibus, massa nec sodales bibendum, sapien lacus blandit
              diam, eu viverra sem augue nec odio. Proin a lorem in felis
              maximus lacinia.
            </Typography>
          </div>
        </Flex>
      </Flex>
      <Flex
        justifyContent="space-between"
        flex={"1 1 0px"}
        className="second-section"
        direction={isMobile ? "column-reverse" : ""}
        gap={isMobile ? "9.6rem" : ""}
      >
        <Flex>
          <div>
            <Typography
              font="h3"
              as="h2"
              fontSize="4.8rem"
              align={isMobile ? "center" : "left"}
            >
              30 YEARS
            </Typography>
            <Typography
              font="bodyText"
              as="p"
              style={{
                maxWidth: "48.7rem",
              }}
              mt={isMobile ? "2rem" : "3.8rem"}
              align={isMobile ? "center" : "left"}
              px={isMobile ? "6.7rem" : ""}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              hendrerit elit quis tincidunt euismod. Maecenas at feugiat ante.
              Nullam velit erat, molestie at felis vel, blandit tempor sem.
              Nulla dapibus, massa nec sodales bibendum, sapien lacus blandit
              diam, eu viverra sem augue nec odio. Proin a lorem in felis
              maximus lacinia.
            </Typography>
          </div>
        </Flex>
        <div className="image-container">
          <RightImageWrapper>
            <Image alt="first-image" src={SecondAboutImageBg} layout="fill" />
            <div className="image">
              <Image alt="first-image" src={PeterAndreImag2} layout="fill" />
            </div>
          </RightImageWrapper>
        </div>
      </Flex>
    </Wrapper>
  );
};

export default About;
