import gifA from "../images/pixel-dennis-long.gif";
import gifB from "../images/pixel-dennis-long-eyebrow.gif";
import {commonThemeExports} from "./commonTheme";

const {gray, black, hideoutBg, graphBg, perfBg, canvasBg, whiteLeatherBg, scallopBg} = commonThemeExports;

const lightTheme = {
	themeName: "lightTheme",
	
	// headerTitleFont: "Noto Sans", // value set in commonTheme
	// headerTitleFontSize: "calc((7vw + 7vh) / 2)", // value set in commonTheme
	headerTitleColor: "lightgray",
	headerTitleHoverColor: "pink",
	// headerImageHeight: "calc(90px + (5vw + 5vh) / 2)", // value set in commonTheme
	// headerImageWidth: "calc(90px + (5vw + 5vh) / 2)", // value set in commonTheme
	// headerSubtitleFont: "Inconsolata", // value set in commonTheme
	// headerSubtitleFontSize: "calc(6px + (3vw + 3vh) / 2)", // value set in commonTheme
	headerSubtitleColor: "white",
	headerSubtitleHoverColor: "white",
	headerBackgroundColor: "gray",//"linear-gradient(7deg, #80755D, #7E7280)",
	headerBackgroundImage: `${graphBg}`,
	headerBackgroundBlur: "0.5px",
	// navFont: "Inconsolata", // value set in commonTheme
	// navFontSize: "calc(8px + (2vw + 2vh) / 2)", // value set in commonTheme
	navTextColor: "lightgray",
	navHoverColor: "white",
	// sectionTitleFont: "Monaco", // value set in commonTheme
	sectionTitleColor: `${gray}`,
	sectionTitleBackgroundColor: "#FEDDAD",/*"#ABFABB",/*#DADFAD,/*#EDEBF2,*/
	sectionTitleBackgroundImage: `${whiteLeatherBg}`,
    sectionContentColor: `${gray}`,
    // sectionContentFontSize: "calc((2vw + 2vh) / 2)", // value set in commonTheme
	// sectionContentLetterSpacing: "calc((1vw + 1vh) / 2)", // value set in commonTheme
	// sectionContentLineHeight: "calc((3.5vw + 3.5vh) / 2)", // value set in commonTheme
	sectionBackgroundColor: "white",
	sectionBackgroundImage: `${scallopBg}`,
	cardBackgroundColor: `${gray}`,
	cardBackgroundImage: "none",
	// cardBodyFont: "Monaco", // value set in commonTheme
	// cardTitleFont: "Inconsolata", // value set in commonTheme
	cardBodyColor: "white",
	cardBodyHoverColor: "thistle",
	cardTitleColor: "thistle",
	percentInvert: "0%",
	buttonImageA: `${gifA}`,
	buttonImageB: `${gifB}`,
	// footerFont: "Inconsolata",
	// footerFontSize: "calc(8px + (3vw + 3vh) / 2)",
	footerColor: "lightgray",
	footerHoverColor: "pink",
	footerBackgroundColor: `${gray}`,
	footerBackgroundImage: `${graphBg}`,
	footerBackgroundBlur: "0px",
	boxShadow1: "1px -4px 3px 0.13px rgba(3, 9, 27, 0.25),  -1px 2px 9px 0px rgba(3, 9, 27, 0.25), -1px 2px 9px 0px rgba(16, 0, 47, 0.5)",
	boxShadow2: "3px -6px 5px 0.25px rgba(3, 9, 27, 0.25),  -1px 2px 18px 1px rgba(3, 9, 27, 0.25), -1px 2px 18px 1px rgba(16, 0, 47, 0.5)",
	redShadow1NE: "2px -4px 3px 0.13px rgba(99, 0, 0, 0.25),  -1px 2px 9px 0px rgba(99, 0, 0, 0.25)",
	redShadow1SE: "2px 4px 3px 0.13px rgba(99, 0, 0, 0.25),  -1px 2px 9px 0px rgba(99, 0, 0, 0.25)",
	redShadow1SW: "-2px 4px 3px 0.13px rgba(99, 0, 0, 0.25),  -1px 2px 9px 0px rgba(99, 0, 0, 0.25)",
	redShadow1NW: "-2px -4px 3px 0.13px rgba(99, 0, 0, 0.25),  -1px 2px 9px 0px rgba(99, 0, 0, 0.25)",
	redShadow2NE: "6px -6px 16px 2px rgba(99, 0, 0, 0.25),  -1px 2px 18px 1px rgba(99, 0, 0, 0.25)",
	redShadow2SE: "6px 6px 16px 2px rgba(99, 0, 0, 0.25),  -1px 2px 18px 1px rgba(99, 0, 0, 0.25)",
	redShadow2SW: "-6px 6px 16px 2px rgba(99, 0, 0, 0.25),  -1px 2px 18px 1px rgba(99, 0, 0, 0.25)",
	redShadow2NW: "-6px -6px 16px 2px rgba(99, 0, 0, 0.25),  -1px 2px 18px 1px rgba(99, 0, 0, 0.25)",
	greenShadow1NE: "2px -4px 3px 0.13px rgba(0, 99, 0, 0.25),  1px -2px 9px 0px rgba(0, 99, 0, 0.25)",
	greenShadow1SE: "2px 4px 3px 0.13px rgba(0, 99, 0, 0.25),  1px -2px 9px 0px rgba(0, 99, 0, 0.25)",
	greenShadow1SW: "-2px 4px 3px 0.13px rgba(0, 99, 0, 0.25),  1px -2px 9px 0px rgba(0, 99, 0, 0.25)",
	greenShadow1NW: "-2px -4px 3px 0.13px rgba(0, 99, 0, 0.25),  1px -2px 9px 0px rgba(0, 99, 0, 0.25)",
	greenShadow2NE: "6px -6px 16px 2px rgba(0, 99, 0, 0.25),  1px -2px 18px 1px rgba(0, 99, 0, 0.25)",
	greenShadow2SE: "6px 6px 16px 2px rgba(0, 99, 0, 0.25),  1px -2px 18px 1px rgba(0, 99, 0, 0.25)",
	greenShadow2SW: "-6px 6px 16px 2px rgba(0, 99, 0, 0.25),  1px -2px 18px 1px rgba(0, 99, 0, 0.25)",
	greenShadow2NW: "-6px -6px 16px 2px rgba(0, 99, 0, 0.25),  1px -2px 18px 1px rgba(0, 99, 0, 0.25)",
	redTextShadowNW: "-6px -6px 16px rgba(99, 0, 0, 0.25),  -1px 2px 18px rgba(99, 0, 0, 0.25)",
	greenTextShadowNE: "6px -6px 16px rgba(0, 99, 0, 0.25),  1px -2px 18px rgba(0, 99, 0, 0.25)",
	textShadow: "3px -6px 5px rgba(3, 9, 27, 0.25),  -1px 2px 18px rgba(3, 9, 27, 0.25), -1px 2px 18px rgba(16, 0, 47, 0.5)",
}

export default lightTheme;
