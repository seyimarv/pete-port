import { createGlobalStyle } from "styled-components";
import ArticulatCF500 from "../src/PeterAndre_Fonts (1)/Articulat.CF/ArticulatCF-Medium.otf"
import ArticulatCF400 from "../src/PeterAndre_Fonts (1)/Articulat.CF/ArticulatCF-Normal.otf"
import BoldArticulatCF from "../src/PeterAndre_Fonts (1)/Articulat.CF/ArticulatCF-Bold.otf";
import BoldRocGrotesk from "../src/PeterAndre_Fonts (1)/Roc Grotesk/RocGrotesk_30.otf"
import  MediumRocGrotesk from "../src/PeterAndre_Fonts (1)/Roc Grotesk/RocGrotesk_37.otf"
import  NormalRocGrotesk from "../src/PeterAndre_Fonts (1)/Roc Grotesk/RocGrotesk_23.otf"
import { devices } from "@themes/mediaQueries";

export default createGlobalStyle`
@font-face {
    font-family: "Articulat.CF";
    src:  url(${BoldArticulatCF});
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Articulat.CF";
    src:  url(${ArticulatCF400});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Articulat.CF";
    src:  url(${ArticulatCF500});
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "RocGrotesk";
    src:  url(${NormalRocGrotesk});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "RocGrotesk";
    src:  url(${BoldRocGrotesk});
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "RocGrotesk";
    src:  url(${MediumRocGrotesk});
    font-weight: 500;
    font-style: normal;
  }
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    scroll-behavior: smooth;
    font-size: 62.5%; 
    background: #000000;
  

    @media ${devices.tabland} { 
        font-size: 50%; 
    }

    @media ${devices.tabport} { 
        font-size: 48.5%;
    }
    @media ${devices.phone} {
        font-size: 62.5%;
    }

}

body {
    box-sizing: border-box;
    font-family: "Articulat.CF";
    a {
        outline: none !important;
        text-decoration: none !important;
    }
}
`;
