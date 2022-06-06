import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Text from "../../typography/index";
import Flex from "../Flex";
import { devices, mediaQueries } from "@themes/mediaQueries";
import useMediaQuery from "hooks/useMediaQuery";
const Questions = [
  {
    id: 1,
    question: "WHAT’S INCLUDE IN MY PURCHASE?",
    answer:
      "Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum.",
  },
  {
    id: 2,
    question: "HOW DO I PURCHASE AN NFT?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam",
  },
  {
    id: 3,
    question: "CAN I USE MY NFT AS A TICKET?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores,",
  },
  {
    id: 5,
    question: "WHAT IS THE TIERING SYSTEM?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores, sequi.",
  },
  {
    id: 4,
    question: "CAN I RESELL MY NFT TICKET?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores, sequi.",
  },
];

const Wrapper = styled.div`
  background: linear-gradient(180deg, #703fff 0%, rgba(112, 63, 255, 0) 100%);
  margin-top: 21rem;
  padding: 0rem 30rem;
  padding-bottom: 14rem;
  padding-top: 7.4rem;

  ${mediaQueries.tabland} {
    padding: 0rem 15rem;
}
  ${mediaQueries.tabport} {
    padding: 0rem 10rem;
}

  ${mediaQueries.phone} {
    padding: 0rem 5.8rem;
    padding-bottom: 8.2rem;
    padding-top: 2.8rem;
    margin-top: 11.4rem;
  }
`;

export function Faq() {
  const isMobile = useMediaQuery(devices.phone)
  return (
    <div id="faq">
      <Wrapper>
        <Text font="title" as="h1" align="center">
          FAQS
        </Text>
        <Text font="subtitle" mb={isMobile ? "1.052rem" : "2.68rem"}>
          FAQ
        </Text>
        {Questions.map((question) => (
          <Banner
            key={question.id}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </Wrapper>
    </div>
  );
}
