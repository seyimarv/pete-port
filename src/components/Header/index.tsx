import Image from "next/image";
import React, { useCallback, useState } from "react";
import Typography from "@typography/index";
import Flex from "../Flex";
import logo2 from "../../assets/logo2.png";
import styled from "styled-components";
import { devices, mediaQueries } from "../../themes/mediaQueries";
import MobileLogo from "../../assets/MobileLogo.png";
import useMediaQuery from "hooks/useMediaQuery";
import Link from "next/link";
const LogoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 30rem;
  height: 19.2rem;

  ${mediaQueries.tabport} {
    width: 12rem;
    height: 9.9rem;
  }
`;

const MainNav = styled(Flex)`
  padding: 0rem 7rem;

  a {
    cursor: pointer;
  }
  ${mediaQueries.tabland} {
    padding: 0rem 2rem;
  }

  ${mediaQueries.tabport} {
    display: none;
  }
`;

const MobileNav = styled(Flex)`
  display: none;
  a {
    cursor: pointer;
  }
  ${mediaQueries.tabport} {
    display: flex;
    padding: 0rem 1.3rem;
  }
`;

const ToggleIcon = styled.div<{ isDropdownOpen?: boolean }>`
  position: relative;
  opacity: 1;
  &,
  &::before,
  &::after {
    width: 2.8rem;
    height: 2px;
    margin-right: 1.8rem;
    border-radius: 26px;
    z-index: 1200;
    ${mediaQueries.tabport} {
      background-color: white;
      display: inline-block;
    }
  }
  & {
    background: ${({ isDropdownOpen }) =>
      isDropdownOpen ? "transparent" : ""};
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: all 0.2s;
    top: 0px;
  }
  &::before {
    top: ${({ isDropdownOpen }) => (isDropdownOpen ? "0" : "-1rem")};
    transform: ${({ isDropdownOpen }) =>
      isDropdownOpen ? "rotate(135deg)" : ""};
  }
  &::after {
    top: ${({ isDropdownOpen }) => (isDropdownOpen ? "0" : "1rem")};
    transform: ${({ isDropdownOpen }) =>
      isDropdownOpen ? "rotate(-135deg)" : ""};
  }
`;

const MobileDropdown = styled(Flex)<{ isDropdownOpen?: boolean }>`
  position: absolute;
  top: 0px;
  width: 100vw;
  flex-direction: column;
  background: black;
  z-index: 999;
  padding: 8rem 5rem;
  align-items: flex-start;
  gap: 6rem;
  transition: all 1s;
  transform: translateY(-100rem);
  visibility: hidden;
  transform: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "translateY(0rem)" : ""};
  visibility: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "visible" : "hidden"};
`;

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isTabport = useMediaQuery(devices.tabport);
  const onToggleDropDown = useCallback(() => {
    setIsDropdownOpen(!isDropdownOpen);
  }, [isDropdownOpen]);
  return (
    <>
      <MainNav justifyContent="space-between" as="nav">
        <Link href="#about">
          <Typography
            font="linkText"
            as="a"
            transform="uppercase"
            fontFamily="Articulat.CF"
          >
            ABOUT PETER
          </Typography>
        </Link>
        <Link href="#faq">
          <Typography font="linkText" as="a" transform="uppercase">
            FAQS
          </Typography>
        </Link>
        <LogoContainer>
          <Image src={logo2} alt="Logo" />
        </LogoContainer>
        <Link href="#buyticket">
          <Typography font="linkText" as="a" transform="uppercase">
            BUY TICKETS
          </Typography>
        </Link>
        <Link href="#contact">
          <Typography font="linkText" as="a" transform="uppercase">
            CONTACT
          </Typography>
        </Link>
      </MainNav>
      <MobileNav justifyContent="space-between">
        <LogoContainer>
          <Image src={MobileLogo} alt="Logo" layout="fill" objectFit="cover" />
        </LogoContainer>
        <ToggleIcon
          onClick={onToggleDropDown}
          isDropdownOpen={isDropdownOpen}
        />
      </MobileNav>
      <div
        style={{
          position: "relative",
        }}
      >
        {isTabport && (
          <MobileDropdown isDropdownOpen={isDropdownOpen}>
            <Link href="#about">
              <Typography
                font="linkText"
                as="a"
                transform="uppercase"
                fontFamily="Articulat.CF"
              >
                ABOUT PETER
              </Typography>
            </Link>
            <Link href="#faq">
              <Typography font="linkText" as="a" transform="uppercase">
                FAQS
              </Typography>
            </Link>
            <Link href="#buyticket">
              <Typography font="linkText" as="a" transform="uppercase">
                BUY TICKETS
              </Typography>
            </Link>
            <Link href="#contact">
              <Typography font="linkText" as="a" transform="uppercase">
                CONTACT
              </Typography>
            </Link>
          </MobileDropdown>
        )}
      </div>
    </>
  );
};

export default Header;
