import hideout from "../images/hideout.svg";
import canvas from "../images/skin_side_up_transparent.png";
import scallop from "../images/seigaiha.png";
import graphPaper from "../images/graph-paper.svg";
import perfLeather from "../images/perforated_white_leather_@2X.png";
import whiteLeather from "../images/white_leather_@2X.png";

export const commonThemeExports = {
		themeName: "commonTheme",
		black: "rgba(3, 9, 27, 1.0)",
		gray: "rgba(33, 33, 33, 1.0)",
		graphBg: `${graphPaper}`,
		hideoutBg: `${hideout}`,
		canvasBg: `${canvas}`,
		perfBg: `${perfLeather}`,
		scallopBg: `${scallop}`,
		whiteLeatherBg: `${whiteLeather}`
};

export const commonTheme = {
	themeName: "commonTheme",
	headerTitleFont: "Lato",
	headerTitleFontSize: "calc((9vw + 6vh) / 2)",
	// headerTitleColor: "gray",
	// headerTitleHoverColor: "purple",
	headerImageHeight: "calc(90px + (5vw + 5vh) / 2)",
	headerImageWidth: "calc(90px + (5vw + 5vh) / 2)",
	headerSubtitleFont: "Inconsolata",
	headerSubtitleFontSize: "calc(8px + (3vw + 3vh) / 2)",
	// headerSubtitleColor: "gray",
	// headerSubtitleHoverColor: "pink",
	// headerBackgroundColor: "lightgray",
	// headerBackgroundImage: `${graphBg}`,
	// headerBackgroundBlur: "0.5px",
	navFont: "Inconsolata",
	navFontSize: "calc(8px + (2vw + 2vh) / 2)",
	// navTextColor: "gray",
	// navHoverColor: "pink",
	sectionTitleFont: "Monaco",
	sectionTitleFontSize: "calc(8px + (2vw + 2vh) / 2)",
	// sectionTitleColor: `${gray}`,
	// sectionTitleBackgroundColor: "#FEDDAD",/*"#ABFABB",/*#DADFAD,/*#EDEBF2,*/
	// sectionTitleBackgroundImage: `${perfBg}`,
    // sectionContentColor: `${gray}`,
    sectionContentFontSize: "calc((2vw + 2vh) / 2)",
	sectionContentLetterSpacing: "calc((1vw + 1vh) / 12)",
	sectionContentLineHeight: "calc((3.5vw + 3.5vh) / 2)",
	// sectionBackgroundColor: "ivory",
	// sectionBackgroundImage: `${scallopBg}`,
	// cardBackgroundColor: `${gray}`,
	// cardBackgroundImage: "none",
	cardBodyFont: "Monaco",
	cardTitleFont: "Arial",
	// cardBodyColor: "white",
	// cardTitleColor: "thistle",
	// buttonImageA: `${gifA}`,
	// buttonImageB: `${gifB}`,
	footerFont: "Inconsolata",
	footerFontSize: "calc(8px + (3vw + 3vh) / 2)",
	// footerColor: "gray",
	// footerHoverColor: "pink",
	// footerBackgroundColor: "lightgray",
	// footerBackgroundImage: `${graphBg}`,
	// footerBackgroundBlur: "0.5px",
	headerTitleShadow: "-2px 4px 18px rgba(99, 0, 0, 0.25), 4px -2px 18px rgba(0, 99, 0, 0.25), 3px -3px 5px rgba(3, 9, 27, 0.25), 3px -4px 8px rgba(16, 0, 47, 0.75), -2px 3px 5px rgba(127, 127, 109, 0.5)",
	headerSubtitleShadow: "-2px 4px 18px rgba(99, 0, 0, 0.25), 4px -2px 18px rgba(0, 99, 0, 0.25), 3px -3px 5px rgba(3, 9, 27, 0.25), 3px -4px 8px rgba(16, 0, 47, 0.65), -2px 3px 5px rgba(127, 127, 109, 0.25)",
	// headerSubtitleShadow: "-1px 2px 18px rgba(99, 0, 0, 0.25), 2px -1px 18px rgba(0, 99, 0, 0.25), 3px -3px 5px rgba(3, 9, 27, 0.25), 1px -2px 8px rgba(16, 0, 47, 0.65), -2px 3px 5px rgba(127, 127, 109, 0.25)",
	textOutlineWhite: "-.75px -.75px 0 #FFF, .75px -.75px 0 #FFF, -.75px .75px 0 #FFF, .75px .75px 0 #FFF",
	textOutlinePink: "-0.5px -0.5px 0 #FFBFCB, 0.5px -0.5px 0 #FFBFCB, -0.5px 0.5px 0 #FFBFCB, 0.5px 0.5px 0 #FFBFCB",
	textOutlineBlack: "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000",
	textOutlineRed: "-0.5px 0px 0 #FF0000, 0px -0.5px 0 #FF0000, 0px 0.5px 0 #FF0000, 0.5px 0px 0 #FF0000",
	textOutlineGreen: "-0.5px 0px 0 #00FF00, 0px -0.5px 0 #00FF00, 0px 0.5px 0 #00FF00, 0.5px 0px 0 #00FF00",
	textOutlineBlue: "-0.5px 0px 0 #0000FF, 0px -0.5px 0 #0000FF, 0px 0.5px 0 #0000FF, 0.5px 0px 0 #0000FF",
	textOutlineRedGreen: "-0.25px 0px 0 #00FF00, 0px -0.25px 0 #00FF00, 0px 0.25px 0 #FF0000, 0.25px 0px 0 #FF0000",
	// textOutlineRedGreen: "-0.5px -0.5px 0 #FF0000, 0.5px -0.5px 0 #FF0000, -0.5px 0.5px 0 #00FF00, 0.5px 0.5px 0 #00FF00"
}

