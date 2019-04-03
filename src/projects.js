import papyracyImage from "./images/Papyracy128.png";

const projects = [
	{
		title: "devicon-react-svg",
		imageUrl: null,
		links: [{
				linkTitle: "module available on",
				linkIcon: "npm",
				linkUrl: "https://www.npmjs.com/package/devicon-react-svg"
			},
			{
				linkTitle: "repo available on",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/devicon-react-svg"
			}
		],
		description: "My second npm package - a React module that renders the Devicons library of SVG technology icons. (In use on this site!)",
		devIcons: ["nodejs_small", "npm", "react"],
	},
	{
		title: "Times Bandit",
		imageUrl: null,
		links: [{
				linkTitle: "extension available at Chrome Web Store ",
				linkIcon: "chrome",
				linkUrl: "https://chrome.google.com/webstore/detail/times-bandit/kbodloaojjbfdeeoglgapaflcfamgcml"
			},
			{
				linkTitle: "repo available on",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/Times_Bandit"
			}
		],
		description: "My first npm package - a small error-handling utility for Promises and asynchronous functions.",
		devIcons: ["js_badge", "chrome", "html5", "css3"],
	},
	{
		title: "handled.js",
		imageUrl: null,//`${handledImage}`,
		links: [
			{	
				linkTitle: "module available on",
				linkUrl: "https://www.npmjs.com/package/handled"
			},
			{
				linkTitle: "repo available on",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/handled"
			}
		],
		description: "My first npm package - a small error-handling utility for Promises and asynchronous functions.",
		devIcons: ["nodejs_small", "npm"],
    },
    {
        title: "CTA-Dash",
        imageUrl: null,
        links: [
            {
                linkTitle: "CTA-Dash - demo",
                linkUrl: "https://fermentationist.github.io/CTA-Dash/"
			},
			{
				linkTitle: "Github",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/CTA-Dash"
			}
        ],
		description : "CTA-Dash is a client-side application that allows users to store and track their Chicago bus routes, weather, and local news on a dashboard style interface.",
		devIcons: ["js_badge", "html5", "css3"],
    },
	{
		title: "Papyracy",
		imageUrl: null,
		links: [
			{
				linkTitle: "extension available at Chrome Web Store",
				linkIcon: "chrome",
				linkUrl: "https://chrome.google.com/webstore/detail/papyracy/elkflfkeobgdoehpdbjbpbocbkpiaack?hl=en"
			},
			{
				linkTitle: "repo available at",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/Papyracy"
			}
		],
		description: "My first Chrome extension, made for didactic purposes, mostly. \nPapyracy leverages the fontastic power of Papyrus to quickly render any webpage nearly unreadable! Simply click the icon and all of the text will be Papyrus-ified!",
		devIcons: ["js_badge", "html5", "css3"]
	},
	{
		title: "ConsoleGame",
		imageUrl: null,//`${ConsoleGameImage}`,
		links: [
			{
				linkTitle: "repo available on",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/ConsoleGame.git"
			}
		],
		description: "As a fan of old Infocom interactive fiction games, I thought it would be fun to hide a text adventure in the browser's console. Open the console in your browser's developer tools to check it out! (command-option-i on Mac, control-shift-i on Windows or Linux) ",
		devIcons: ["js_badge", "react"],
	}
]

export default projects;