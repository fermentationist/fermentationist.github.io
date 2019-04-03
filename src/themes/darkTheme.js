import darkGifA from "../images/pixel-dennis-dim-long.gif";
import darkGifB from "../images/pixel-dennis-dim-long-eyebrow.gif";
import {commonThemeExports} from "./commonTheme";
const {hideoutBg, canvasBg, graphBg, perfBg, scallopBg, whiteLeatherBg, black, gray} = commonThemeExports;

const darkTheme = {
	themeName: "darkTheme",
	// headerTitleFont: "Noto Sans", // value set in commonTheme
	// headerTitleFontSize: "calc((7vw + 7vh) / 2)", // value set in commonTheme
	headerTitleColor: "gray",
	headerTitleHoverColor: "pink",
	// headerImageHeight: "calc(90px + (5vw + 5vh) / 2)", // value set in commonTheme
	// headerImageWidth: "calc(90px + (5vw + 5vh) / 2)", // value set in commonTheme
	// headerSubtitleFont: "Inconsolata", // value set in commonTheme
	// headerSubtitleFontSize: "calc(6px + (3vw + 3vh) / 2)", // value set in commonTheme
	headerSubtitleColor: "lightgray",
	headerSubtitleHoverColor: "pink",
	headerBackgroundColor:`${gray}`,
	headerBackgroundImage: `${graphBg}`,
	headerBackgroundBlur: "0px",
	// navFont: "Inconsolata", // value set in commonTheme
	// navFontSize: "calc(8px + (2vw + 2vh) / 2)", // value set in commonTheme
	navTextColor: "gray",
	navHoverColor: "pink",
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
	percentInvert: "75%",
	buttonImageA: `${darkGifA}`,
	buttonImageB: `${darkGifB}`,
	// footerFont: "Inconsolata",
	// footerFontSize: "calc(8px + (3vw + 3vh) / 2)",
	footerColor: "lightgray",
	footerHoverColor: "pink",
	footerBackgroundColor: `${gray}`,
	footerBackgroundImage: `${graphBg}`,
	footerBackgroundBlur: "0px",
	boxShadow1: "1px -4px 3px 0.13px rgba(0, 0, 0, 1),  -1px 2px 9px 0px rgba(0, 0, 0, 1)",
	boxShadow2: "2px -6px 5px 0.25px rgba(0, 0, 0, 1),  -1px 2px 18px 2px rgba(0, 0, 0, 1)",
	redShadow1NE: "2px -4px 3px 0.13px rgba(13, 0, 0, 0.5),  -1px 2px 9px 0px rgba(13, 0, 0, 0.25)",
	redShadow1SE: "2px 4px 3px 0.13px rgba(13, 0, 0, 0.5),  -1px 2px 9px 0px rgba(13, 0, 0, 0.25)",
	redShadow1SW: "-2px 4px 3px 0.13px rgba(13, 0, 0, 0.5),  -1px 2px 9px 0px rgba(13, 0, 0, 0.25)",
	redShadow1NW: "-2px -4px 3px 0.13px rgba(13, 0, 0, 0.5),  -1px 2px 9px 0px rgba(13, 0, 0, 0.25)",
	redShadow2NE: "6px -6px 16px 2px rgba(13, 0, 0, 0.5),  -1px 2px 18px 1px rgba(13, 0, 0, 0.25)",
	redShadow2SE: "6px 6px 16px 2px rgba(13, 0, 0, 0.5),  -1px 2px 18px 1px rgba(13, 0, 0, 0.25)",
	redShadow2SW: "-6px 6px 16px 2px rgba(13, 0, 0, 0.5),  -1px 2px 18px 1px rgba(13, 0, 0, 0.25)",
	redShadow2NW: "-6px -6px 16px 2px rgba(13, 0, 0, 0.5),  -1px 2px 18px 1px rgba(13, 0, 0, 0.25)",
	greenShadow1NE: "2px -4px 3px 0.13px rgba(0, 13, 0, 0.5),  1px -2px 9px 0px rgba(0, 13, 0, 0.25)",
	greenShadow1SE: "2px 4px 3px 0.13px rgba(0, 13, 0, 0.5),  1px -2px 9px 0px rgba(0, 13, 0, 0.25)",
	greenShadow1SW: "-2px 4px 3px 0.13px rgba(0, 13, 0, 0.5),  1px -2px 9px 0px rgba(0, 13, 0, 0.25)",
	greenShadow1NW: "-2px -4px 3px 0.13px rgba(0, 13, 0, 0.5),  1px -2px 9px 0px rgba(0, 13, 0, 0.25)",
	greenShadow2NE: "6px -6px 16px 2px rgba(0, 13, 0, 0.5),  1px -2px 18px 1px rgba(0, 13, 0, 0.25)",
	greenShadow2SE: "6px 6px 16px 2px rgba(0, 13, 0, 0.5),  1px -2px 18px 1px rgba(0, 13, 0, 0.25)",
	greenShadow2SW: "-6px 6px 16px 2px rgba(0, 13, 0, 0.5),  1px -2px 18px 1px rgba(0, 13, 0, 0.25)",
	greenShadow2NW: "-6px -6px 16px 2px rgba(0, 13, 0, 0.5),  1px -2px 18px 1px rgba(0, 13, 0, 0.25)",
	redTextShadowNW: "-6px -6px 16px rgba(99, 0, 0, 0.25),  -1px 2px 18px rgba(99, 0, 0, 0.25)",
	greenTextShadowNE: "6px -6px 16px rgba(0, 99, 0, 0.25),  1px -2px 18px rgba(0, 99, 0, 0.25)",
	textShadow: "3px -6px 5px rgba(3, 9, 27, 0.25),  -1px 2px 18px rgba(3, 9, 27, 0.25), -1px 2px 18px rgba(16, 0, 47, 0.5)",
}

export default darkTheme;