import React from "react";
import styled from "styled-components";
import HeroSectionImage from "../../assets/PeterAndre_Hero_Image_2 3.png";
import Image from "next/image";
import Typography from "../../utils/typography";
import Flex from "../Flex";
import { Button } from "../Button";
import { devices, mediaQueries } from "../../utils/themes/mediaQueries";
import useMediaQuery from "hooks/useMediaQuery";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 96rem;

  .text {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }
  ${mediaQueries.tabport} {
    height: 70rem;
  }
  ${mediaQueries.phone} {
    height: 41.3rem;
  }
  .image-wrapper {
    position: relative;
    height: 100%;
    ${mediaQueries.phone} {
      height: 68.5%;
    }
  }
`;

const HeroSection = () => {
  const isMobile = useMediaQuery(devices.phone);
  return (
    <Wrapper id="">
      <div className="image-wrapper">
        <Image
          alt="Hero"
          src={HeroSectionImage}
          quality={100}
          layout="fill"
          className="image"
        />
      </div>
      <Flex className="text" direction="column">
        <Typography font="h2" as="h2" align="center">
          PETER ANDRE 30
        </Typography>
        <Typography
          font="bodyTextSecondary"
          as="p"
          align="center"
          mt="2rem"
          mb={isMobile ? "4rem" : "6.2rem"}
        >
          30 years of business.
          <br /> Get your NFT tickets now.
        </Typography>
        <Button>PURCHASE TICKET</Button>
      </Flex>
    </Wrapper>
  );
};

export default HeroSection;
