import { mediaQueries } from "utils/themes/mediaQueries";
import ArrowDownIcon from "assets/icons/ArrowDownIcon";
import ArrowUpIcon from "assets/icons/ArrowUp";
import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../utils/typography";
import Flex from "../Flex";

const Entity = styled(Flex)<{ open?: boolean }>`
  justify-content: space-between;
  border-bottom: ${({ open }) => !open && "0.5px solid #FFFFFF;"};
  margin: auto;
  padding-bottom: 1.8rem;
  margin-bottom: 2.3rem;

  ${mediaQueries.phone} {
    padding-bottom: 0.7rem;
    border-bottom: ${({ open }) => !open && "0.191979px solid #FFFFFF"};
    margin-bottom: 0.88rem;

    svg {
      width: 0.7rem;
      height: auto;
    }
  }

  .content {
    max-width: 70%;

    ${mediaQueries.phone} {
      max-width: 73%;
    }
  }

  .pointer {
    align-self: start;
    cursor: pointer;
  }
  .question {
    cursor: pointer;
  }

  .faq-answer {
    margin-top: 1rem;
    margin-bottom: 1.9rem;
    ${mediaQueries.phone} {
      margin-top: 0.2rem;
      margin-bottom: 0.728rem;
    }
  }
`;
const QuestionContext = React.createContext<any>(null);

const Faq = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <Entity open={open}>
        <div className="content">
          <Text
            font="faqQuestion"
            onClick={() => setOpen(!open)}
            className="question"
          >
            {question}
          </Text>
          {open && (
            <Text font="faqAnswer" className="faq-answer">
              {answer}
            </Text>
          )}
        </div>
        <div onClick={() => setOpen(!open)} className="pointer">
          {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </Entity>
    </QuestionContext.Provider>
  );
};

export default Faq;
