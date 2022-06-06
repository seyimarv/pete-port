import React from "react";
import styled from "styled-components";
import Text from "../../utils/typography";
import { Button as BaseButton } from "../Button";
import Flex from "../Flex";
import PeterThirdImage from "../../assets/PeterBehindCloseDoors.png";
import BuyTicketLines from "../../assets/BuyTicketLines.png";
import Image from "next/image";
import { devices, mediaQueries } from "../../utils/themes/mediaQueries";
import Logo from "../../assets/BuyTicketLogo.png";
import useMediaQuery from "hooks/useMediaQuery";

const EventsWrapper = styled.div`
  border-radius: 7.5rem;
  margin: 0rem 9.7rem;
  margin-top: 25rem;
  background: linear-gradient(
    180deg,
    #09efaf -42.59%,
    #ff974b -42.59%,
    rgba(0, 0, 0, 0) -42.59%,
    #09efaf -42.58%,
    rgba(9, 239, 175, 0.18) 4.35%,
    rgba(151, 60, 68, 0.055) 99.99%,
    rgba(9, 239, 175, 0) 100%
  );
  border-radius: 75px;
  padding-top: 3.7rem;
  padding-bottom: 10.5rem;

  ${mediaQueries.tabport} {
    margin: 0rem 5rem;
    margin-top: 20rem;
  }

  ${mediaQueries.phone} {
    margin: 0rem 3.3rem;
    margin-top: 11rem;
    border-radius: 2.175rem;
    padding-top: 1.07rem;
    padding-bottom: 3.5rem;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 86.546432%;
  height: 77%;
`;
const Wrapper = styled.div`
  position: relative;
  margin-top: 15.7rem;
  height: 89.5rem;
  .lines {
    position: absolute;
    height: 100%;
    width: 50%;
    right: 0px;
    top: 0px;
    z-index: -1;
  }
  .logo {
    position: absolute;
    bottom: 0px;
    left: 10.74%;
    height: 50.503%;
    width: 31.3%;
    top: 62%;
    transform: translateX(-10.74%, -62%);
  }
  ${mediaQueries.tabport} {
    height: 50rem;
  }
  ${mediaQueries.phone} {
    height: 25.661rem;
    margin-top: 11.6rem;
  }
`;

const TitleText = styled(Text)`
  ${mediaQueries.tabport} {
    font-size: 4rem;
    line-height: 9rem;
  }
  ${mediaQueries.phone} {
    font-size: 2rem;
    line-height: 7.5rem;
  }
`;
const Button = styled(BaseButton)`
  margin-top: 9.9rem;
  ${mediaQueries.phone} {
    height: 1.44rem;
    width: 10.1rem;
    border-radius: 0.43493rem;
    margin-top: 3.5rem;
  }
`;
const BuyTicket = () => {
  const isMobile = useMediaQuery(devices.phone);
  return (
    <div id="buyticket">
      <EventsWrapper>
        <Flex direction="column">
          <TitleText font="h1" as="h1" transform="uppercase" align="center">
            live events
          </TitleText>
          <Text
            mt={isMobile ? "1.2rem" : "4.7rem"}
            font="smallText"
            align="center"
          >
            PETERANDRE30.com
          </Text>
          <Text
            mt={isMobile ? ".76rem" : "2rem"}
            font="buyTicket"
            align="center"
          >
            BUY YOUR NFT TICKETS
          </Text>
          <Text
            mt={isMobile ? ".58rem" : "2rem"}
            fontSize={isMobile ? ".6rem" : "2rem"}
            align="center"
            lineHeight="2.5rem"
            font="embedText"
          >
            {"<---- THIS IS AN EMBED ---->"}
          </Text>
          <Button>
            <Text font="buttonTextSecondary" align="center">
              Connect Wallet
            </Text>
          </Button>
        </Flex>
      </EventsWrapper>
      <Wrapper>
        <ImageWrapper>
          <Image src={PeterThirdImage} alt="peter" layout="fill" />
        </ImageWrapper>
        <div className="lines">
          <Image src={BuyTicketLines} alt="peter" layout="fill" />
        </div>
        <div className="logo">
          <Image src={Logo} alt="logo" layout="fill" />
        </div>
      </Wrapper>
    </div>
  );
};

export default BuyTicket;
