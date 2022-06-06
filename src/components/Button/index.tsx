import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../../themes/mediaQueries";

export const Button = styled.button<{height?: string; width?:string;}>`
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.9rem;
  font-family: "RocGrotesk";
  letter-spacing: 0.05em;
  line-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  border-radius: 15px;
  border: none;
  height: ${({height}) => height || "4.9rem"};
  width: ${({width}) => width || "34.8rem"};
  background: ${({theme}) => theme.colors.purple};
  border: none;
  text-transform: uppercase;

  ${mediaQueries.phone} {
     font-size: 1.4rem;
     width: 20.4rem;
  }
`;
