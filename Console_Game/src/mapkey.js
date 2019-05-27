const mapKey = game => {
	// Prototype definition for a single cell on the map grid (usually a room)
	const MapCell = {
		name: "Nowhere", // room name to be displayed by game.currentHeader() 
		locked: false, 
		lockText: "", // text to be displayed when player attempts to enter the locked area (but is prevented)
		unlockText: "", // text to be displayed when area becomes unlocked
		hideSecrets: false, // used to toggle room description and whether player has access to hiddenEnv
		description: "You find yourself in a non-descript, unremarkable, non-place. Nothing is happening, nor is anything of interest is likely to happen here in the future.", // the default text displayed when player enters or "looks" at room
		smell: "Your nose is unable to detect anything unusual, beyond the smell of mildew and rot that permeates the entirety of the decrepit building.", // text displayed in response to smell command
		sound: "The silence is broken only by the faint sound of the wind outside, and the occasional creaking of sagging floorboards underfoot.", // text displayed in response to listen command
		hiddenEnv: [], // items in area that are not described and cannot be interacted with unless hideSecrets = false
		visibleEnv: [], // items described at the end of game.describeSurroundings() text by default
		get env (){ // accessor property returns an array containing the names (as strngs) of the items in present environment
			// if (this.hideSecrets){ //do not include items in hiddenEnv
			// 	return this.visibleEnv;
			// }
			// return [...this.visibleEnv, ...this.hiddenEnv]; // include the items in hiddenEnv
			if (this.hideSecrets){
				return this.visibleEnv;
			}
			this.visibleEnv = this.visibleEnv.concat(this.hiddenEnv);
			this.hiddenEnv = [];
			return this.visibleEnv;
		},
		set env (newEnv){ // sets accessor property to an array (of strings) of the names of the items in present environment
			return this.visibleEnv = newEnv;
		},
		removeFromEnv: function (item) {
			const newEnv =  this.env.filter(it => it.name !== item.name);
			return this.env = newEnv;
			
		},
		addToEnv: function (itemName) { 
			// const itemObj = game.items[`_${itemName}`];
			// const newEnv = this.env.concat(itemObj)
			// return this.env = newEnv;
			const itemObj = game.items[`_${itemName}`];
			return this.visibleEnv.push(itemObj);

		}
	}
	const mapkey = {
		"0": {
			locked: true,
			lockText: "An attempt has been made to board up this door. Reaching between the unevenly spaced boards, you try the doorknob and discover that it is also locked."
		},

		"A": {
			name: "Freedom!",
			locked: false,
			closed: true,
			get lockText () {
				return `The formidable wooden front door will not open. It looks as old as the rest of the building, and like the wood panelled walls of the entrance hall, it is dark with countless layers of murky varnish. It is ${this.locked ? "locked" : "unlocked"}.`;
				
			},
			get description () {
				if (game.state.turn < 3) {
					game.captured();
					return "";
				}
				return game.winner("\nYou have escaped!\n");
			},
		},

		"^": {
			name: "Second floor hallway",
			description: "You are at the top of a wide wooden staircase, on the second floor of the old house.",
			visibleEnv: []
		},

		"+": {
			name: "Study",
			visibleDescription: "The walls of the dark, wood-panelled study are lined with bookshelves, containing countless dusty tomes. Behind an imposing walnut desk is a tall-backed desk chair, upholstered in worn mahogany leather. On the wall behind the chair hangs an ornately framed painting.",
			smell: "The pleasantly musty smell of old books emanates from the bookshelves that line the wall.",
			hideSecrets: true,
			visibleEnv: ["desk", "painting", "chair", "bookshelves", "booklet"],
			hiddenEnv: ["safe"],
			hiddenDescription: "In space where a painting formerly hung there is a small alcove housing a wall safe.",
			get description (){
				const catalogLocation = this.env.map(x=>x.name).includes("booklet") ? "There is a booklet on the desk" : "";
				return this.hideSecrets ? this.visibleDescription : this.visibleDescription + "\n" + "\n" + this.hiddenDescription + "\n" + catalogLocation;
			}
		},

		"#": {
			name: "Staircase landing",
			description: "You are on the landing of a worn oak staircase connecting the first and second floors of the old abandoned house.",
			visibleEnv: ["booklet", "card", "survey"]
		},

		"%": {
			name: "Entrance hall",
			description: "You are in the main entrance hall of a seemingly abandoned house. There are three doors on either side of the hall, several of which have been boarded up. The front door is to the south. At the rear of the hall is a wide oak staircase that connects the first and second floors of the old house.",
			visibleEnv: ["door", "note"]
		},

		"@": {
			name: "Stone staircase",
			description: "You are standing on a stone staircase leading to the basement. A faint cold draft greets you from below.",
		},

		"$": {
			name: "Broom closet",
			hideSecrets: true,
			hiddenEnv: ["glove"],
			visibleEnv: ["chain"],
			des1: "The small closet is dark, although you can see a small chain hanging in front of you.",
			get des2 (){
				const hidden = this.hiddenEnv;
				const text = "The inside of this small broom closet is devoid of brooms, or much of anything else, for that matter";
				const plural = hidden.length > 1 ? "y" : "ies";
				return text + (hidden.length ? `, with the exception of ${game.formatList(hidden.map(item => `${item.article} ${item.name}`))} which occup${plural} a dusty corner.`: ".");
			},
			get description (){
				return this.hideSecrets ? this.des1 : this.des2;
			}
		}
	}

	// every cell defined in mapkey will inherit from MapCell
	Object.keys(mapkey).forEach((cell) => {
		Object.setPrototypeOf(mapkey[cell], MapCell);
	});

	return mapkey;
};

export default mapKey;