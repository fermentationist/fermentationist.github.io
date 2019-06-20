import consoleGame from "./game.js";
import {randomDogName} from "./dogNames.js";
// ===========//ItemModule//===========
const itemModule = game => {
	const ItemProto = {
		name : "Item",
		used : false,
		weight : 1,
		get description () {
			return `There is nothing particularly interesting about the ${this.name}.`
		},
		takeable: true,
		openable: false,
		flammable: false,
		activated: false,
		closed: false,
		locked: false,
		article: "a",
		listed: true,
		solution: null,
		burn: function () {
			game.state.objectMode = false;
			if (!game.inInventory("matchbook")) {
				console.p("You don't have the means to light a fire.");
				return;
			}
			game.items._matchbook.closed = false;
			if (!this.flammable){
				console.p(`The meager flame is inadequate to ignite the ${this.name}.`);
				return;
			}
			console.p(`The match's flame proves to be enough to ignite the ${this.name}. You watch as the ${this.name} is quickly transformed into little more than a pile of ash.`);

			if (game.inEnvironment(this.name)) {
				game.state.currentMapCell.removeFromEnv(this);
				return;
			}
			if (game.inInventory(this.name)) {
				game.removeFromInventory(this);
				return;
			}
			return;
		},
		burnDown: function () {
			Object.getPrototypeOf(this).burn.call(this);
			game.dead(`Unsatisfied after having consumed the ${this.name}, the fire quickly moves on to bigger and better things, like turning you and the house you are trapped in to a pile of smoldering embers.`);
		},
		climb: function () {
			game.objectMode = false;
			console.p(`You attempt to scale the ${this.name}, but quickly slip, landing painfully on your back. That was pointless.`)
		},
		close: function () {
			game.state.objectMode = false;
			if (!game.inEnvironment(this.name)) {
				console.p(`You don't see ${this.article} ${this.name} here.`);
				return;
			}
			if (!this.openable) {
				console.p("It cannot be closed.");
				return;
			}
			if (this.closed) {
				console.p("It is already closed.");
				return;
			}
			console.p(`The ${this.name} is now closed.`);
			this.closed = true;
			return;
		},
		correctGuess: function () {
		},
		drink: function () {
			game.objectMode = false;
			console.p(`You cannot drink the ${this.name}.`);
			return;
		},
		drop: function () {
			game.state.objectMode = false;
			if (game.inInventory(this.name)) {
				game.removeFromInventory(this);
				game.state.currentMapCell.visibleEnv.push(this);
				return console.p(`${this.name} dropped.`);
			} else {
				return console.p("You don't have that.");
			}
		},
		eat: function () {
			game.objectMode = false;
			console.p(`You cannot eat the ${this.name}.`);
			return;
		},
		examine: function () {
			game.state.objectMode = false;
			return console.p(this.description);

		},
		extinguish: function () {
			game.state.objectMode = false;
			if (this.fireCount > 0) {
				this.activated = false;
				this.count = 0;
				console.p(`You extinguish the ${this.name}.`);
				return;
			}
			console.p(`The ${this.name} is not lit.`);
		},
		flush: function () {
			game.state.objectMode = false;
		},
		incorrectGuess: function () {
		},
		lock: function () {
			game.state.objectMode = false;
			if (this.locked){
				console.p(`The ${this.name} is already locked.`);
				return;
			}
			if (game.inInventory(this.unlockedBy)){
				this.locked = true;
				console.p(`Using the ${this.unlockedBy}, you lock the ${this.name}`);
				return;
			}
			console.p(`You do not have the means to lock the ${this.name}.`)
			return;
		},
		move: function () {
			console.p(`You cannot move the ${this.name}`);
		},
		open: function () {
			game.state.objectMode = false;
			if (!game.inEnvironment(this.name) && !game.inInventory(this.name)) {
				console.p(`You don't see ${this.article} ${this.name} here.`);
				return;
			}
			if (!this.openable) {
				console.p("It cannot be opened.");
				return;
			}
			if (!this.closed) {
				console.p("It is already open.");
				return;
			}
			if (this.locked){
				console.p("It appears to be locked.");
				return;
			}
			console.p(`The ${this.name} is now open.`);
			this.closed = false;
			return;
		},
		read: function () {
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
		rezrov: function () {
			game.state.objectMode = false;
			if (!game.inInventory("scroll") && !game.inEnvironment("scroll")){
				console.p("You are incapable of wielding such powerful magic unassisted.");
				return;
			}
			
			console.log("TCL: this.locked", this.locked)
			this.locked = false;
			this.closed = false;
			if (this.lockedTarget) {
				game.mapKey[this.lockedTarget].locked = false;
			}
			if (this.closedTarget) {
				game.mapKey[this.closedTarget].closed = false;
			}
			console.p("Once the rezrov spell is cast, the magic scroll disappears with a sudden flash, and a loud \"WHOMP!\"");
			console.p(`When the smoke has cleared, the ${this.name} has been magically unlocked and opened!`);
			if (game.inEnvironment("scroll")) {
				game.state.currentMapCell.removeFromEnv(game.items._scroll);
				return;
			}
			if (game.inInventory("scroll")) {
				game.removeFromInventory(game.items._scroll);
				return;
			}
		},
		take: function () {
			game.state.objectMode = false;
			if (this.takeable && game.inEnvironment(this.name) ) {
				game.addToInventory([this]);
				game.state.currentMapCell.removeFromEnv(this);
				console.p(`You pick up the ${this.name}.`);
				return;
			} else {
				console.p(`You cannot take the ${this.name}.`);
				return;
			}
		},
		takeComponent: function () {
			const realItem = Object.getPrototypeOf(this);
			if (!this.takeable || !game.inEnvironment(this)) {
				return console.p(`You can't take that.`);
			}
			game.addToInventory([this]);
			game.state.currentMapCell.removeFromEnv(this);
			realItem.take.call(realItem);
		},
		turn: function () {
			game.state.objectMode = false;
			console.p(this.reverseDescription ? this.reverseDescription : `Turning the ${this.name} has no noticeable effect.`);
			return;
		},
		unlock: function () {
			game.state.objectMode = false;
			if (!this.locked){
				console.p(`The ${this.name} is not locked.`);
				return;
			}
			if (game.inInventory(this.unlockedBy)){
				this.locked= false;
				console.p(`Using the ${this.unlockedBy}, you are able to unlock the ${this.name}`);
				return;
			}
			console.p(`You do not have the means to unlock the ${this.name}.`)
			return;
		},
		use: function (){
			game.state.objectMode = false;
			return console.p(`Try as you might, you cannot manage to use the ${this.name}`);
		},
		
	}

	const items = {
		_all: {
			name: "all",
			listed: false,
			takeable: false,
			take: function () {
				game.state.objectMode = false;
				const all = game.state.combinedEnv;
				all.forEach(item => {
					return item.takeable ? item.take() : null;
				});
			},
			drop: function () {
				game.state.objectMode = false;
				const all = game.state.inventory.filter(it => it.name !== "no_tea");// filter out "no_tea" (you can't drop it)
				all.forEach(item => {
					item.drop();
					return;
				});
			},
		},
		_bathtub: {
			name: "bathtub",
			takeable: false,
			description: ""
		},
		_bed: {
			name: "bed",
			flammable: true,
			takeable: false,
			description: "The antique bedframe is made of tubular bronze. There are not any sheets or blankets or pillows on the old, stained, queen-sized mattress that rests atop it.",
			burn: function () {
				Object.getPrototypeOf(this).burnDown.call(this);
			},
		},
		_booklet: {
			name: "booklet",
			article: "a",
			flammable: true,
			description: "This booklet appears to be the exhibition catalogue for some fancy art show. ",
			read: function (){
				game.state.objectMode = false;
				if (!game.inInventory(this.name)) {
					return console.p(`You will need to pick up the ${this.name} first.`);
				}
				game.displayItem({
					title: "Ministry of Culture",
					artist: "Isak Berbic, Emiliano Cerna-Rios, Dennis Hodges and Zdenko Mandusic",
					year: "2008",
					info: "Exhibition catalog",
					source: "https://drive.google.com/file/d/0B89dfqio_IykVk9ZMV96TUJESnM/preview?usp=sharing"
				});
			}
		},
		_books: {
			name: "books",
			listed: false,
			takeable: false,
			description: "While you notice many of the titles as familiar works of classic literature, nothing stands out as being of particular interest.",
			read: function () {
				console.p("You cannot possibly read all of these books, and considering you have been abducted by persons unknown and are trapped in a strange house, you have neither the presence of mind, nor the time to sit down with a good book right now.");
			},
			proto: "_bookshelves",
		},
		_bookshelves: {
			name: "bookshelves",
			listed: false,
			takeable: false,
			article: "some",
			description: "Wooden bookshelves line one wall of the study, reaching from floor to ceiling. There are hundreds of moldering, hardcover books lining the shelves."
		},
		_card: {
			name: "card",
			text: `Survey Card \nFor each of the following questions, please circle '1' for 'strongly disagree', '2' for 'somewhat disagree', '3' for 'no opinion', '4' for 'somewhat agree' and '5' for 'strongly agree'. \n1. This is the first involuntary study I have participated in.\n2. I found the study conditions to be inadequately challenging.\n3. I would be willing to participate in additional studies.\n4. I am aware that any attempt to contact law enforcement will have adverse consequences for myself or my family, whose location of residence is known.\n`,
			description: "It is a four by six inch card cut from off-white cardstock, on which a survey is printed.",
			turn: function () {
				game.state.objectMode = false;
				console.p("Upon turning over the survey card, you notice a message, written in pencil. It says,");
				console.note("\n\"THE OWLS ARE NOT WHAT THEY SEEM\".");
				return;
			}
		},
		_cartridge: {
			name: "cartridge",
			description: "The Super 8 film cartridge is made primarily of a clear, smoky plastic body containing a single spool of developed film. It looks a lot like an audio cassette tape, though it is a little thicker, and it is square instead of being merely rectangular. The title, \"Canned Laughs\", is hand written on a curling paper label.",
			play: function () {
				if (!game.inEnvironment("projector") && !game.inInventory("projector")) {
					console.p("First, you will need to find something to project the film with.");
					return;
				}
				return game.displayItem({
					title: "\nCanned Laughs",
					artist: "Dennis Hodges",
					year: "2001",
					info: "Super 8mm film to video transfer with dubbed audio",
					source: "https://drive.google.com/file/d/0B0gDqpRvgWsgY2o5U1pqckFTQlE/preview"
				});
			},
			use: function () {
				this.play.call(this)
			},
			project: function () {
				this.play.call(this);
			}
		},
		_chain: {
			name: "chain",
			weight: 0,
			description: "The thin ball chain dangling in front of you is exactly the sort often connected to a lightbulb. Perhaps you should \"pull\" it...",
			takeable: false,
			listed: false,
			pull: function () {
				game.state.objectMode = false;
				let dark = game.state.currentMapCell.hideSecrets;
				dark ? console.p("An overhead lightbulb flickers on, faintly illuminating the room.") : console.p("The lightbulb is extinguished.");
				game.state.currentMapCell.hideSecrets = !dark;
				return game.describeSurroundings();
			},
			use: function () {
				return this.pull();
			}
		},
		_chair: {
			name: "chair",
			takeable: false,
			description: "It looks like a wooden chair– no more, no less.",
			use: function () {
				game.state.objectMode = false;
				console.p("You sit down on the chair.");
				const wait = game.commands.filter(command => command[0].name === "_wait")[0][0];
				wait.call(this);
			}
		},
		_coffee_table: {
			name: "coffee_table",
			listed: false,
			takeable: false,
			description: function (){
				return `The low, four-legged table has nothing on it${game.state.env.visibleEnv.includes("photo") ? " except for a small, framed photo.": "."}`
			},
		},
		_collar: {
			name: "collar",
			description: `It is ${game.state.dogName}'s collar! Whoever assaulted you and took your dog must have come this way!"`,
			smell: function () {
				console.p("The collar smells like leather and scared doggie!");
			}
		},
		_crowbar: {
			name: "crowbar",
			weight: 5,
			description: "It is a typical crowbar, made of hexagonal steel stock, with an unpolished black surface. It weighs about five pounds."
		},
		_cup : {
			name: "cup",
			weight: 2,
			description: "It is a small, golden cup with two finely wrought handles.",
		},
		_desk: {
			name: "desk",
			takeable: false,
			openable: true,
			closed: true,
			contents: [],
			description: "The antique writing desk is six feet in length, and blanketed with dust. It has a single drawer on one side.",
			open: function () {
				Object.getPrototypeOf(this).open.call(this);
				if (game.items._drawer.closed){
					game.items._drawer.closed = false;
				}
			},
			close: function () {
				Object.getPrototypeOf(this).close.call(this);
				if (!game.items._desk.closed){
					game.items._drawer.closed = true;
				}
			}
		},
		_disc: {
			name: "disc",
			text: "Untitled (Litany)",
			get description() {
				return `It is a disc made of a shiny black polymer, lined with hundreds of tiny concentric grooves. It looks to be about seven inches in diameter, with a one and one-half inch hole in its center. It bears a label that says, "${this.text}".`;
			},
			play: function () {
				if (!game.inEnvironment("phonograph") && !game.inInventory("phonograph")) {
					console.p("First, you will need to find a phonograph.")
					return;
				}
				return game.displayItem({
					title: "\nUntitled (litany)",
					artist: "Dennis Hodges",
					year: "2010",
					info: "Found audio recordings",
					source: "https://drive.google.com/file/d/1s02tHvAU0E7dMJgbhUnIPNg8ayWGNmxZ/preview?usp=sharing"
				});
			},
			use: function () {
				this.play.call(this)
			},
		},
		_door: {
			name: "door",
			article: "a",
			openable: true,
			locked: true,
			closed: true,
			takeable: false,
			listed: false,
			unlockedBy: "key",
			lockedTarget: "A",
			closedTarget: "A",
			get description() {
				game.state.objectMode = false;
				return `The massive wooden door, darkened with generations of dirt and varnish, is secured with a sturdy new deadbolt, which is ${!this.closed ? "open!" : !this.locked ? "unlocked!" : "locked."}`
			},
			lock() {
				Object.getPrototypeOf(this).lock.call(this);
				game.mapKey[this.lockedTarget].locked = true;
				return;
			},
			unlock() {
				Object.getPrototypeOf(this).unlock.call(this);
				game.mapKey[this.lockedTarget].locked = false;
				return;
			},
			open() {
				Object.getPrototypeOf(this).open.call(this);
				game.mapKey[this.closedTarget].closed = false;
				return;
			},
			close() {
				Object.getPrototypeOf(this).close.call(this);
				game.mapKey[this.closedTarget].closed = true;
				return;
			}

		},
		_drawer: {
			name: "drawer",
			listed: false,
			openable: true,
			closed: true,
			takeable: false,
			contents: [],
			// proto: "_desk",
			get description () {
				if (this.closed) {
					return "The drawer is closed.";
				}
				return `The drawer is open. There is ${this.contents.length < 1 ? "nothing": game.formatList(this.contents.map(item => `${item.article} ${item.name}`))} inside.`
			},
			open: function () {
				Object.getPrototypeOf(this).open.call(this);
				if (game.items._desk.closed){
					game.items.desk.closed = false;
				}
			},
			close: function () {
				Object.getPrototypeOf(this).close.call(this);
				if (!game.items._desk.closed){
					game.items.desk.closed = true;
				}
			}
        },
        _dresser: {
            name: "dresser",
            proto: "_table"
        },
		_filthy_note: {
			name: "filthy_note",
			text: `Dear John,\nI'm leaving. After all of this time, I said it. But I want you to understand that it is not because of you, or something you've done (you have been a loving and loyal partner). It is I who have changed. I am leaving because I am not the person who married you so many years ago; that, and the incredibly low, low prices at Apple Cabin. Click here ==> http://liartownusa.tumblr.com/post/44189893625/apple-cabin-foods-no-2 to see why I prefer their produce for its quality and respectability.`,
			description: "A filthy note you found on the floor of a restroom. Congratulations, it is still slightly damp. Despite its disquieting moistness, the text is still legible."
		},
		_glove: {
			name: "glove",
			closed: true,
			description: "It is a well-worn gray leather work glove. There is nothing otherwise remarkable about it.",
			contents: [],
			examine: function () {
				game.state.objectMode = false;
				if (this.contents.length) {
					const hiddenItem = this.contents.pop();
					console.p(`${this.description}\nAs you examine the glove, a ${hiddenItem.name} falls out, onto the floor.`);
					game.state.currentMapCell.addToEnv(hiddenItem.name);
					return;
				}
				return this.description;
			}
		},
		_grue_repellant: {
			name: "grue_repellant",
			defective: Math.random() < 0.03,
			weight: 3,
			article: "some",
			description: "A 12oz can of premium aerosol grue repellant. This is the good stuff. Grues genuinely find it to be somewhat off-putting.",
			use: function () {
				game.state.objectMode = false;
				if (!game.inInventory(this.name)) {
					return game.inEnvironment(this.name) ? console.p("You will need to pick it up first.") : console.p("You don't see that here.");
				} else if (this.used) {
					return console.p("Sorry, but it has already been used.");
				} else if (this.defective) {
					this.used = true;
					return console.p("Nothing happens. This must be one of the Math.random() < 0.03 of grue_repellant cans that were programmed to be, I mean, that were accidentally manufactured defectively. Repeated attempts to coax repellant from the aerosol canister prove equally fruitless.");
				} else {
					this.used = true;
					return console.p("A cloud of repellant hisses from the canister, temporarily obscuring your surroundings. By the time it clears, your head begins to throb, and you feel a dull, leaden taste coating your tongue. The edges of your eyes and nostrils feel sunburnt, and there is also a burning sensation to accompany an unsteady buzzing in your ears. Although you are not a grue, you find it to be more than somewhat off-putting.");
				}
			},
			spray: function () {
				game.state.objectMode = false;
				return this.use();
			},
			drink: function () {
				game.state.objectMode = false;
				game.dead("Drinking from an aerosol can is awkward at best, but still you manage to ravenously slather your chops with the foaming grue repellant. You try to enjoy the searing pain inflicted by this highly caustic (and highly toxic!) chemical as it dissolves the flesh of your mouth and throat, but to no avail. It is not delicious, and you are starting to realize that there are some non-trivial drawbacks to willingly ingesting poison. Oops.");
			}
		},
		_key: {
			name: "key",
			description: "The shiny key is made of untarnished brass and looks new, like it could have been cut yesterday."
		},
		_lantern: {
			name: "lantern",
			flammable: false,
			proto: "_matchbook",
			get description() {
				return `The old brass lantern is the quaint sort that burns hydrocarbons to produce light. It is currently ${this.activated ? "lit." : "extinguished."}`;
			},
			use: function () {
				game.state.objectMode = false;
				if (!game.inInventory("matchbook")) {
					console.p("You don't have the means to light a fire.");
					return;
				}
				game.items._matchbook.closed = false;
				this.activated = true;
				this.count = 250;
				console.p("Lighting the lantern with the match produces a brighter, longer lasting source of light.");
			},
			light: function () {
				this.use.call(this);
			},
			burn: function () {
				this.use.call(this);
			}
		},
		
		_maps: {
			name: "maps",
			article: "some",
			get description() {
				this.read();
				return `The stack of dogeared pages appear to be architectural drawings. With a quick survey of your surroundings, you confirm with reasonable certainty that they are likely floor plans for this house.`;
			},
			read: function () {
				game.state.objectMode = false;
				if (!game.inInventory(this.name)) {
					return console.p(`You will need to pick up the ${this.name} first.`);
				}
				const currentPosition = game.state.position;
				const floorMap = game.maps[currentPosition.z].map(row => {
					return row.map(cell => cell === "*" ? "⬛️" : "🌫");
				});
				floorMap[currentPosition.y].splice(currentPosition.x, 1, "⭐️");
				const croppedMap = floorMap.slice(8).map(row => row.slice(5, 11))
				console.map(croppedMap);
			},
			use: function () {
				this.read.call(this);
			}
		},
		_matchbook: {
			name: "matchbook",
			openable: true,
			closed: true,
			count: 3,
			flammable: true,
			get description() {
				return `It is an old paper matchbook, of the type that used to be given away with packs of cigarettes, or printed with the name and telephone number of a business and used as marketing schwag. This particular specimen is beige, with black and white text that says \"Magnum Opus\" in a peculiar, squirming op-art font. ${this.closed ? "It is closed, its cardboard cover tucked in." : "The cardboard cover is open, and you can see a handwritten message on the inside. It says, \"THE OWLS ARE NOT WHAT THEY SEEM.\""}`;
			},
			get fireCount () {
				return this.activated ? this.count : 0;
			},
			decrementCounter: function () {
				if (this.activated && this.count > 0) {
					-- this.count;
					if (this.count === 0){
						console.p("Despite your best efforts the flame flickers out.");
						this.activated = false;
						return;
					}
				}
			},
			use: function () {
				game.state.objectMode = false;
				if (this.closed) {
					this.open.call(this);
					console.p("As you flip open the matchbook, folding back the cover, you glimpse something scrawled in pencil on the inside.")
				}
				console.p("You pluck out one of the paper matches. It ignites easily as you scrape its head against the red phosphorus strip, producing a tenuous flame that you are quick to guard with your cupped hand.");
				this.count = 3;
				this.activated = true;
			},  
			light: function () {
				this.use.call(this);
			}
        },
        _nightstand: {
            proto: "_table"
        },
		_no_tea: {
			name: "no_tea",
			weight: 0,
			article: "",
			description: "You do not have any tea.",
			methodCallcount: 0,
			takeable: false,
			no_teaMethod: function (message) {
				this.methodCallcount++;
				game.state.objectMode = false;
				console.p(message);
				if (this.methodCallcount > 1 && game.state.pendingAction !== "contemplate") {
					console.p("Perhaps you should take a moment to contemplate that.");
				}
			},
			drink: function () {
				return this.no_teaMethod("How do you intend to drink no tea?");
			},
			drop: function () {
				return this.no_teaMethod("You can't very well drop tea that you don't have.");
			},
			take: function () {
				return this.no_teaMethod("No tea isn't the sort of thing you can take.");
			},
			examine: function () {
				return this.no_teaMethod(this.description);
			},
			use: function () {
				return this.no_teaMethod("Unsurprisingly, using the no tea has no effect.");
			},
			contemplate: function () {
				if (this.methodCallcount > 2) {
					console.p("Having thoroughly contemplated the existential ramifications of no tea, you suddenly find that your being transcends all time and space. You are the spoon, so to speak.");
					return game.winner();
				}
				return this.no_teaMethod("Let's not resort to that just yet!");
			},
		},
		_note: {
			name: "note",
			text: `We have your dog.`,
			flammable: true,
			firstRead: true,
			description: "The note is composed of eclectically sourced, cut-out letters, in the style of a movie ransom note. You found it lying next to you on the floor when you regained consciousness.",
			read: function () {
				game.state.objectMode = false;
				if (!game.inInventory(this.name)) {
					return console.p(`You will need to pick up the ${this.name} first.`);
				}
				console.ransom(this.text);
				if (this.firstRead) {
					console.p(`Who would do such a thing to sweet little ${game.state.dogName}!?`);
					this.firstRead = false;
				}

			},
		},
		_painting: {
			name: "painting",
			takeable: true,
			listed: false,
			flammable: true,
			description: "The small, grimy image is of an owl, teaching a class a classroom of kittens how to catch mice. The rendering of perspective is amateurish, and the depicted animals look hostile and disfigured. It is an awful painting.",
			previouslyRevealed: false,
			location: "+",
			take() {
				Object.getPrototypeOf(this).take.call(this);
				this.revealText("When you remove the terrible painting, ");
			},
			revealText(text) {
				if (!this.previouslyRevealed) {
					console.p(text + "a small recess is revealed. Within the shallow niche is a small black wall safe, covered with countless shallow dents, scratches and abrasions.");
					game.mapKey[this.location].hideSecrets = false;
					this.previouslyRevealed = true;
				}
			},
			move() {
				this.revealText("When you move the terrible painting, ");
			},
			turn() {
				this.move()
			},
			burn() {
				game.state.objectMode = false;
				if (!game.inInventory("matchbook")) {// check for matchbook, exit if not in inventory
					console.p("You don't have the means to light a fire.");
					return;
				}
				// update the description of the painting to reflect the fact that it has been burned.
				this.description = "The painting is lying broken upon the floor. It is so badly burned now, that its subject has become indecipherable. What remains of the canvas is a carbonized black. You can't help but think that it is still an improvement compared to the original work.";
				game.items._matchbook.closed = false;// matchbook remains open after use, if not already opened.
				if (game.state.currentMapCell.hideSecrets) {// if painting still on wall
					this.revealText("Although the match nearly goes out before you can ignite the painting, a small flame finally finds a foothold on the canvas, and it is soon alarmingly ablaze. Thinking it unwise to burn down the house you are trapped in, you remove the painting from the wall, and stomp out the fire before it can spread any further. \nWhen you look back at the wall that formerly held the burning painting, ");
					return;
				}
				// if painting already removed from wall
				this.revealText("Although the match nearly goes out before you can ignite the painting, a small flame finally finds a foothold on the canvas, and it is soon alarmingly ablaze. You are suddenly inspired to end your ill-considered, if brief flirtation with pyromania, and promptly stomp out the fire before they can spread any further.");
				return;
			},
		},
		_phonograph: {
			name: "phonograph",
			description: "The old phonograph has a built-in speaker, and looks like it might still work.",
			play: function () {
				if (!game.inEnvironment("disc") && !game.inInventory("disc")) {
					console.p("First, you will need to find something to play on the phonograph.")
					return;
				}
				return game.items._disc.play.call(this);
			},
			use: function () {
				this.play.call(this)
			},

		},
		_photo: {
			name: "photo",
			description: "The four by six inch photograph is in a cheap frame made of painted fiberboard. It's a portrait of a very old, and probably infirm black poodle, bluish cataracts clouding its eyes.",
			reverseDescription: "There is a handwritten inscription on the back of the frame.",
			text: "My Precious Muffin's 18th Birthday - 10/28/17",
			read: function (){
				game.state.objectMode = false;
				if (!game.inInventory(this.name)){
					return console.p(`You will need to pick up the ${this.name} first.`);
				}
				console.p(`The text on the ${this.name} reads: \n`);
				return console.cursive(this.text);
			},
		},
		_projector: {
			name: "projector",
			description: "It took you a moment to even recognize the brown plastic box as a film projector. It was designed for consumer use, to display Super 8mm film cartridges of the type that were once used to make home movies in the 1970's.",
			play: function () {
				if (!game.inEnvironment("cartridge") && !game.inInventory("cartridge")) {
					console.p("First, you will need to find something to project with the projector.")
					return;
				}
				return game.items._cartridge.play.call(this);
			},
			use: function () {
				this.play.call(this)
			},
			project: function () {
				this.play.call(this);
			}
		},
		_safe: {
			name: "safe",
			closed: true,
			openable: true,
			locked: true,
			listed: false,
			takeable: false,
			solution: 10281999,
			description: "The wall safe looks rugged and well-anchored. You doubt that it could be breached by brute force, and it appears to have already successfully weathered a few such attempts. On its face, a numeric keypad resides beneath what looks like a small digital readout.",
			contents: [],
			correctGuess: function () {
				game.state.objectMode = false;
				this.locked = false;
				this.closed = false;
				console.digi("PASSCODE ACCEPTED.");
				console.p("Upon entering the correct passcode, the bolt inside the safe's door slides back, and the door pops open gently.");
				if (this.contents.length > 0) {
					console.p(`Inside the safe is ${game.formatList(this.contents.map(item => `${item.article} ${item.name}`))}.`);
				}
			},
			incorrectGuess: function () {
				game.state.objectMode = false;
				console.digi("PASSCODE INCORRECT");
				return;
			},
			open: function () {
				if (this.locked){
					this.unlock.call(this);
					return;
				}
				Object.getPrototypeOf(this).open.call(this);
			},
			lock: function () {
				game.state.objectMode = false;
				this.closed = true;
				this.locked = true;
				console.p("You lock the wall safe.");
			},
			unlock: function () {
				game.state.solveMode = true;
				game.state.objectMode = false;
				if (! this.locked) {
					console.p("The safe is already unlocked.");
					return;
				}
				console.codeInline([`To enter the 8-digit numerical passcode, you must type an underscore `, `_`, `, followed by the value enclosed in parentheses.`]);
				console.codeInline([`For example: `, `_(01234567)`]);
				console.digi("ENTER PASSCODE:");
			},
			use: function () {
				this.unlock.call(this);
			},
		},
		_scroll: {
			name: "scroll",
			flammable: true,
			description: "There is some small text, printed on a thin leather strap that was used to bind the rolled up scroll. It says, \"rezrov: Open even locked or enchanted objects\". As you unfurl the scroll, there appears to be some writing on the inside surface of the parchment, but each line of text seems to disappear as soon as it is revealed.",
			text: "rezrov: Open even locked or enchanted objects",
			use: function (){
				return window.rezrov;
			},
		},
		_sink: {
			name: "sink",
			listed: false,
			description: "",
			 
		},
		_sofa: {
			name: "sofa",
			flammable: true,
			listed: false,
			description: "The well-worn sitting room sofa is upholstered brown cowhide.",
			burn: function () {
				Object.getPrototypeOf(this).burnDown.call(this);
			}
		},
		_survey: {
			name: "survey",
			proto: "_card",
			listed: false,
			takeable: true,
			take: function () {
				this.takeComponent.call(this)
			}
		},
		_symbol: {
			name: "symbol",
			listed: false,
			takeable: false,
			description: "The symbol on the card's reverse is printed in red ink, and is shaped like (??)",
		},
		_table: {
			name: "table",
			takeable: false,
			listed: false,
			description: "The cherrywood dining table is long enough to accomodate at least twenty guests, by your estimation, although you can see only one chair."
		},
		_toilet: {
			name: "toilet",
			listed: false,
			description: "It is a very old porcelain toilet",
			text: "Thomas Crapper % Co.",
			flush: function () {
				game.state.objectMode = false;
				console.p("Having pushed the lever, and watched the water exit the bowl, you can personally verify that the toilet works as expected.");
			}
		}
	}
	
	// Prototype-links each of the objects in items to either Item or other prototype, if defined
	// Object.keys(items).map((itemInstance) => {
	// 	const protoProperty = items[itemInstance].proto;
	// 	const prototype = protoProperty ? items[protoProperty] : Item
	// 	Object.setPrototypeOf(items[itemInstance], prototype);
	// });
    // for (let item in items) {
	// 	const protoProperty = items[item].proto;
	// 	const prototype = protoProperty ? items[protoProperty] : Item
	// 	Object.setPrototypeOf(items[item], prototype);
    // }
    // const NewItem = itemName => {
    //     const newItem = {...items[itemName]};
    //     const protoProperty = items[itemName].proto;
	// 	const prototype = protoProperty ? items[protoProperty] : Item
    //     Object.setPrototypeOf(newItem, prototype);
    //     return newItem;
    // }
    // for (let item in items) {
    //     const finishedItem = new NewItem(item);
    //     console.log("TCL: finishedItem", finishedItem);
    //     return finishedItem;
    // }
    // return items;
    
    function Item (itemName) {
        console.log("TCL: Item -> itemName", itemName)
        const newItem = {...items[itemName]};
        const protoProperty = items[itemName].proto;
        console.log("TCL: Item -> newItem", newItem)
		const prototype = protoProperty ? items[protoProperty] : ItemProto;
        console.log("TCL: Item -> prototype", prototype)
        Object.setPrototypeOf(newItem, prototype);
        return newItem;
    }
    
    return {Item, items}
};

export default itemModule;

