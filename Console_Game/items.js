import consoleGame from "./game.js";
import { pStyle } from "./prefs.js";
// ===========//ItemModule//===========
const itemModule = game => {
	const Item = {
		name : "Item",
		used : false,
		weight : 1,
		get description () {
			return `There is nothing particularly interesting about this ${this.name}.`
		},
		takeable: true,
		article: "a",
		take: function (){
			game.state.objectMode = false;
			if(this.takeable && game.inEnvironment(this.name)){
				game.addToInventory([this]);
				game.mapKey[game.state.currentCell].removeFromEnv(this);
				return console.p(`You pick up the ${this.name}`);
			} else {
				return console.p("You can't take that.");
			}
		},
		drop: function (){
			game.state.objectMode = false;
			if (game.inInventory(this.name)){
				game.removeFromInventory(this);
				game.mapKey[game.state.currentCell].env.push(this);
				return console.p(`${this.name} dropped.`);
			} else {
				return console.p("You don't have that.");
			}
		},
		examine: function (){
			game.state.objectMode = false;
			return console.p(this.description);
				
		},
		read: function (){
			game.state.objectMode = false;
			if (!this.text){
				return console.p("There is nothing to read.");
			}
			if (!game.inInventory(this.name)){
				return console.p(`You will need to pick up the ${this.name} first.`);
			}
			console.p(`The text on the ${this.name} reads: \n`);
			return console.note(this.text);
		},

		hide: function (){
			return game.displayItem();
		},

		use: function (){
			game.state.objectMode = false;
			return console.p(`Try as you might, you cannot manage to use the ${this.name}`);
		}
	}

	const items = {
		_all: {
			name: "all",
			_take_all: function () {
				const all = game.state.env;
				console.log("TCL: all", all);
				// game.state.objectMode = false;
				// if (this.takeable && game.inEnvironment(this.name)) {
				// 	game.addToInventory([this]);
				// 	game.mapKey[game.state.currentCell].removeFromEnv(this);
				// 	return console.p(`You pick up the ${this.name}`);
				// } else {
				// 	return console.p("You can't take that.");
				// }
			},
		},

		_book: {
			name: "book",
			weight: 2,
			article: "a",
			description: "This dusty, leatherbound tome"
		},

		_catalogue: {
			name: "catalogue",
			article: "a",
			description: "This booklet appears to be the exhibition catalogue for some fancy art show. ",
			read: function (){
				console.info(`[click link to read => "https://drive.google.com/file/d/0B89dfqio_IykVk9ZMV96TUJESnM/view?usp=sharing"]`)
				// window.open("https://drive.google.com/file/d/0B89dfqio_IykVk9ZMV96TUJESnM/view?usp=sharing", "_blank");//game.displayItem("assets/2008_Ministry_of_Culture.pdf", "application/pdf", "1440px", "960px");
			}
		},

		_chain: {
			name : "chain",
			weight : 0,
			description: "The chain dangling in front of you is exactly the sort often connected to a lightbulb. Perhaps you should \"pull\" it...",
			takeable: false,
			pull: function (){
				game.state.objectMode = false;
				let dark = game.mapKey[game.state.currentCell].hideSecrets;
				dark ? console.p("An overhead lightbulb flickers on, faintly illuminating the room.") : console.p("The lightbulb is extinguished.");
				game.mapKey[game.state.currentCell].hideSecrets = !dark;
				return game.describeSurroundings();
			},
			use: function (){
				return this.pull();
			}
		},

		_glove: {
			name : "glove",
			description: "It is a well-worn gray leather work glove. There is nothing otherwise remarkable about it. 🧤",
			contents:[],
			examine: function (){
				game.state.objectMode = false;
				if (this.contents.length){
					const hiddenItem = this.contents.pop();
					console.p(`${this.description}\nAs you examine the glove, a ${hiddenItem.name} falls out, onto the floor.`);
					return game.mapKey[game.state.currentCell].addToEnv(hiddenItem.name);
				} 
				return this.description;
			}
		},

		_grue_repellant: {
			name : "grue_repellant",
			defective : 1,//Math.random() < 0.03,
			weight : 3,
			article: "some",
			description: "A 12oz can of premium aerosol grue repellant. This is the good stuff. Grues genuinely find it to be somewhat off-putting.",
			use: function () {
				game.state.objectMode = false;
				if (!game.inInventory(this.name)){
					return inEnvironment(this.name) ? console.p("You will need to pick it up first.") : console.p("You don't see that here.");
				} else if (this.used){
					return console.p("Sorry, but it has already been used.");
				} else if (this.defective) {
					this.used = true;
					return console.p("Nothing happens. This must be one of the Math.random() < 0.03 of grue_repellant cans that were programmed to be, I mean, that were accidentally manufactured defectively. Repeated attempts to coax repellant from the aerosol canister prove equally fruitless.");
				} else {
					this.used = true;
					return console.p("A cloud of repellant hisses from the canister, temporarily obscuring your surroundings. By the time it clears, your head begins to throb, and you feel a dull, leaden taste coating your tongue. The edges of your eyes and nostrils feel sunburnt, and you there is also a burning sensation to accompany an unsteady buzzing in your ears. Although you are not a grue, you find it to be more than somewhat off-putting.");
				}
			},
			spray: function () {
				return this.use();
			},
			drink: function () {
				game.dead("Drinking from an aerosol can is awkward at best, but still you manage to ravenously slather your chops with the foaming grue repellant. You try to enjoy the searing pain inflicted by this highly caustic (and highly toxic!) chemical as it dissolves the flesh of your mouth and throat, but to no avail. It is not delicious, and you are starting to realize that there are some non-trivial drawbacks to willingly ingesting poison. Oops.");
			}
		},

		_key: {
			name : "key",
			description: "It is an old-timey key that appears to be made of tarnished brass"
		},

		_note: {
			name : "note",
			text: `Dear John,\nI'm leaving. After all of this time, I said it. But I want you to understand that it is not because of you, or something you've done (you have been a loving and loyal partner). It is I who have changed. I am leaving because I am not the person who married you so many years ago; that, and the incredibly low, low prices at Apple Cabin. Click here ==> http://liartownusa.tumblr.com/post/44189893625/apple-cabin-foods-no-2 to see why I prefer their produce for its quality and respectability.`,
			description: "A filthy note you found on the floor of a restroom. Congratulations, it is still slightly damp. Despite its disquieting moistness, the text is still legible."
		},

		_no_tea: {
			name: "no_tea",
			weight: 0,
			article: "",
			description: "You do not have any tea.",
			methodCallcount: 0,
			no_teaMethod: function (message){
					this.methodCallcount ++;
					game.state.objectMode = false;
					console.p(message);
					// return console.p(`${message} ${this.methodCallcount > 1 ? "Perhaps you should contemplate that for a moment..." : ""}`);
					if (this.methodCallcount > 1){
						console.inline(["Perhaps you should take a moment to ", "contemplate", " that."], [pStyle, pStyle + "font-style:italic;", pStyle])	
					}
			},
			drink: function (){
				return this.no_teaMethod("How do you intend to drink no tea?");
			},
			drop: function (){
				return this.no_teaMethod("You can't very well drop tea that you don't have.");
			},
			take: function (){
				return this.no_teaMethod("No tea isn't the sort of thing you can take.");
			},
			examine: function (){
				return this.no_teaMethod(this.description);
			},
			use: function (){
				return this.no_teaMethod("Unsurprisingly, using the no tea has no effect.");
			},
			contemplate: function (){
				if (this.methodCallcount > 1){
					console.p("Having thoroughly contemplated the existential ramifications of no tea, you suddenly find that your being transcends all time and space. You are the spoon, so to speak.");
					return console.h1("You just won, you winner, you!");
				}
				return this.no_teaMethod("Let's not resort to that just yet!");
			},
			takeable: false
		}
	}
	
	Object.keys(items).map((itemInstance) => {
		Object.setPrototypeOf(items[itemInstance], Item);
	});

	return items;
};
// Items.stockDungeon("hiddenEnv");
// Items.stockDungeon("visibleEnv");

// Items._glove.contents.push(Items._key);

// consoleGame.addToInventory([Items._grue_repellant, Items._no_tea]);

export default itemModule;