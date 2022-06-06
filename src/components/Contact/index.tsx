import React from "react";
import Flex from "../Flex";
import Text from "../../typography/index";
import styled from "styled-components";
import FooterLogo from "../../assets/FooterLogo.png";
import Image from "next/image";
import TelegramIcon from "assets/icons/Telegram";
import InstagramIcon from "assets/icons/instagramIcon";
import MusicIcon from "assets/icons/MusicIcon";
import TwitterIcon from "assets/icons/TwitterIcon";
import { mediaQueries } from "@themes/mediaQueries";

const Footer = styled(Flex)`
  border-top: 0.5px solid #ffffff;
  flex: 1 1 1;
  margin: 0rem 8.6rem;

  ${mediaQueries.tabport} {
    svg {
        width: 1.5rem;
        height: auto;
    }

}
  ${mediaQueries.phone} {
    margin: 0rem 3.3rem;

    .footer-icons-wrapper {
        gap: .48rem;
    }
    svg {
        width: .7rem;
        height: auto;
    }
  }

  .image-wrapper {
    position: relative;
    height: 20rem;
    width: 20rem;
    ${mediaQueries.tabport} {
        width: 9rem;
        height: 9rem;
    
  }
    ${mediaQueries.phone} {
        width: 5.8rem;
        height: 5.8rem;
    
  }
`;

const Wrapper = styled.div`
  margin-top: 41rem;
  margin-bottom: 49.2rem;

  ${mediaQueries.phone} {
    margin-top: 6.1rem;
    margin-bottom: 12.9rem;
  }
`;

const Contact = () => {
  return (
    <div id="contact">
      <Wrapper>
        <Flex direction="column">
          <Text align="center" font="h1" as="h1" lineHeight="11.6rem">
            Contact
          </Text>
          <Text font="emailInfo" align="center" mt="1.4rem">
            INFO@PETERANDRE30.COM
          </Text>
        </Flex>
      </Wrapper>
      <Footer justifyContent="space-between">
        <div className="image-wrapper">
          <Image
            src={FooterLogo}
            alt="footerlogo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Text font="footerText" className="footer-text">
          Site by Mojo. All rights reserved.
        </Text>
        <div>
          <Flex gap="1.6rem" className="footer-icons-wrapper">
            <MusicIcon />
            <InstagramIcon />
            <TwitterIcon />
            <TelegramIcon />
          </Flex>
        </div>
      </Footer>
    </div>
  );
};

export default Contact;
