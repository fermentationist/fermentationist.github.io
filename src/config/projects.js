const projects = [
	{
		title: "ConsoleGame",
		imageUrl: null,
		titleLinkUrl: "https://github.com/fermentationist/ConsoleGame.git",
		links: [
			{
				linkTitle: "• to play, open the browser console (dev tools) by right-clicking on the screen and selecting \"Inspect\". Then select the \"Console\" tab if it is not already selected. You can also access the console by pressing F12 (or Cmd-Opt-i on Mac, or Ctrl-Shift-i on Windows and Linux).",
				linkIcon: null,
				linkUrl: null
			},
			{
				linkTitle: "• repo available on",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/ConsoleGame.git"
			}
		],
		description: "As a fan of old Infocom interactive fiction games, I thought it would be fun to hide a text adventure in the browser's console. Open the JavaScript console in your browser's developer tools to check it out! (command-option-i on Mac, control-shift-i on Windows or Linux) ",
		devIcons: ["javascript", "webpack"],
	},
	{
		title: "woke-dyno",
		imageUrl: null,
		titleLinkUrl: "https://www.npmjs.com/package/woke-dyno",
		links: [{
				linkTitle: "• module available on",
				linkIcon: "npm",
				linkUrl: "https://www.npmjs.com/package/woke-dyno"
			},
			{
				linkTitle: "• repo available on",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/woke-dyno"
			},
			{
				linkTitle: "• read my article about it on Hackernoon",
				linkUrl: "https://hackernoon.com/how-to-prevent-your-free-heroku-dyno-from-sleeping-dggxo3bi2"
			}
		],
		description: "woke-dyno is an npm package to prevent your free Heroku dyno from sleeping.",
		devIcons: ["nodejs_small", "npm", "jest"],
	}, 
	{
		title: "devicon-react-svg",
		imageUrl: null,
		titleLinkUrl: "https://www.npmjs.com/package/devicon-react-svg",
		links: [{
				linkTitle: "• module available on",
				linkIcon: "npm",
				linkUrl: "https://www.npmjs.com/package/devicon-react-svg"
			},
			{
				linkTitle: "• repo available on",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/devicon-react-svg"
			}
		],
		description: "My second npm package - a React component that renders the Devicons library of technology icons as inline SVG elements. (In use on this site!)",
		devIcons: ["nodejs_small", "npm", "rollup"],
	}, 
	{
		title: "slenderman",
		imageUrl: null,
		titleLinkUrl: "https://www.npmjs.com/package/slenderman",
		links: [{
				linkTitle: "• module available on",
				linkIcon: "npm",
				linkUrl: "https://www.npmjs.com/package/slenderman"
			},
			{
				linkTitle: "• repo available on",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/slenderman"
			},
		],
		description: "slenderman is a fast and easy way to create a basic Svelte app. With a single command, you will have a running app, that you can then take apart and reassemble as you wish. \nThe app is set up to use Webpack, with svelte-loader, to compile your code. Webpack-dev-server will start up automatically to serve your app, and watch your files for changes (hot reloading!).",
		devIcons: ["nodejs_small", "npm", "svelte", "webpack"],
	}, 
	{
		title: "Papyracy",
		imageUrl: null,
		titleLinkUrl: "https://chrome.google.com/webstore/detail/papyracy/elkflfkeobgdoehpdbjbpbocbkpiaack?hl=en",
		links: [
			{
				linkTitle: "• extension available at Chrome Web Store",
				linkIcon: "chrome",
				linkUrl: "https://chrome.google.com/webstore/detail/papyracy/elkflfkeobgdoehpdbjbpbocbkpiaack?hl=en"
			},
			{
				linkTitle: "• repo available on",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/Papyracy"
			}
		],
		description: "My first Chrome extension, made for didactic purposes, mostly. \nPapyracy leverages the fontastic power of Papyrus to quickly render any webpage nearly unreadable! Simply click the icon and all of the text will be Papyrus-ified!",
		devIcons: ["javascript", "html5", "css3", "chrome"]
	},
	{
		title: "CRUD burger",
		imageUrl: null,
		titleLinkUrl: "https://fierce-beach-30371.herokuapp.com/",
		links: [
			{
				linkTitle: "• CRUD burger- demo",
				linkUrl: "https://fierce-beach-30371.herokuapp.com/"
			},
			{
				linkTitle: "• repo available on Github",
				linkIcon: "github_full",
				linkUrl: "https://github.com/fermentationist/burger"
			}
		],
		description: "A simple full-stack CRUD app that lets you enter the name of a burger in a list, click a button to change the burger's status to \"eaten\", and with another click, delete burgers that have been \"eaten\". It uses a MySQL database with a homemade ORM, with Bootstrap and Handlebars on the front end.",
		devIcons: ["javascript", "html5", "css3", "bootstrap", "mysql"],
	},
]

export default projects;