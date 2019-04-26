import {pStyle, textColor, primaryFont, fontSize} from "./prefs.js";
import thesaurus from "./thesaurus.js";
import maps from "./maps.js";

var ALIASES;

const Commands = game => {
	// Command functions

	// Change player's location on the map, given a direction
	const _move = (direction) => {
		let newPosition = {
			x: game.state.position.x,
			y: game.state.position.y,
			z: game.state.position.z
		}
		switch (direction){
			case "north":
				newPosition.y = newPosition.y - 1;
				break;
			case "south":
				newPosition.y = newPosition.y + 1;
				break;
			case "east":
				newPosition.x = newPosition.x + 1;
				break;
			case "west":
				newPosition.x = newPosition.x - 1;
				break;
			case "up":
				newPosition.z = newPosition.z + 1;
				break;
			case "down":
				newPosition.z = newPosition.z - 1;
				break;
			default:
				break;
		}
		// Exit function if movement in given direction is not possible
		if (maps[newPosition.z][newPosition.y][newPosition.x] === "*"){
			return console.p("You can't go that direction");
		}
		// If movement in direction is possible, update player position
		console.p(`You walk ${direction}...`);
		game.state.position = {
			x: newPosition.x,
			y: newPosition.y,
			z: newPosition.z,
		}
		return game.describeSurroundings();
	}

	// Describe environment and movement options in current location
	const _look = (command) => {
		return game.describeSurroundings();
	}
 
	// Handles commands that require an object. Sets pendingAction to the present command, and objectMode so that next command is interpreted as the object of the pending command.                               
	const _act_upon = (command) => {
		game.state.objectMode = true;
		game.state.pendingAction = command;
		return console.p(`What is it you would like to ${command}?`);
	}

	// change to console.info
	const _pref = (whichPref) => {
		game.state.prefMode = true;
		game.state.pendingAction = whichPref;

		const italic = `font-size:120%;color:#32cd32;font-style:italic;font-family:${primaryFont}`;
		const bold = `font-size:120%;color:#32cd32;font-style:bold;font-family:${primaryFont}`;
		const example = `font-size:120%;color:#7BF65E;font-weight:bold;font-family:${primaryFont}`;
		const exampleItalic = `font-size:120%;color:#7BF65E;font-style:italic;font-weight:bold;font-family:${primaryFont}`;
		console.p(`Enter value for ${whichPref}.`);
		console.inline([`Value must be entered`,` within parentheses (and quotes, if the value is a string), and immediately preceded by an underscore.`],[pStyle, italic]);
		return console.inline([`Like this:  `, `_(`, `"value"`, `)`], [bold, example, exampleItalic, example]);
	}

	const _wait = () => {
		return console.p("Time passes...");
	}

	// Displays items in the player's inventory.
	const _inventory = (command) => {

		let items = [], itemsPlusArticles = [];
		game.state.inventory.map((item) => {
			items.push(item.name)
			const itemWithArticle = item.article ? `${item.article} ${item.name}` :  item.name;
			itemsPlusArticles.push(itemWithArticle);
		});
		let segments =  `You are carrying ${game.formatList(itemsPlusArticles)}`.split(" ");
		let itemStyle = `font-size:120%;color:cyan;font-style:italic;`;

		let styles = segments.map((word) => {
			let style = pStyle;
			items.map((thing) => {
				if (word.includes(thing)){
					style = itemStyle;
				}
			});
			return style;
		});

		segments = segments.map((word, i) => {
			return i === segments.length - 1 ? `${word}.` : `${word} `;
		});
		return console.inline(segments, styles);
	}

	// Displays inventory as a table.
	const _inventoryTable = (command) => {
		const table =game.state.inventory.map(item => {
			const {name, description} = item;
			return {name, description};
		})
		return console.table(table, ["name", "description"]);
}

	// Handles commands that are item names.
	const _items = (itemName) => {
		// Exit function with error message if previous command does not require an object
		if (!game.state.objectMode){
			return console.p("Invalid command");
		}
		// Exit function with error message if item is not available in player inventory or current location.
		const item = game.inEnvironment(itemName) || game.inInventory(itemName);
		if (!item){
			return console.p(`${itemName} is not available`);
		}
		const action = game.state.pendingAction;
		// invoke the item's method that corresponds to the selected action
		return item[action]();
	}

	// const _save = (command) => {
	// 	game.state.saveMode = true;
	// 	game.state.restoreMode = false;
	// 	game.state.pendingAction = command;
	// 	console.log('game.state.pendingAction', game.state.pendingAction)
	// 	const infoStyle = `font-size:100%;color:#75715E;font-family:${primaryFont};`;
	// 	const boldInfo = infoStyle + `font-weight:bold;color:white`;
	// 	console.info("Please choose a slot number (_0 through _9) to save your game. To save to the selected slot, type an underscore, immediately followed by the slot number.");
	// 	console.inline([`For example, type `, `_3`, ` to select slot 3.`],[infoStyle, boldInfo, infoStyle]);
	// }

	// const _save_slot = (slotNumber) => {
	// 	if (game.state.saveMode){
	// 		console.invalid(`Save to slot ${slotNumber} failed.`);
	// 		return game.state.saveMode = false;
	// 	} else if (game.state.restoreMode){
	// 		console.invalid(`Restore from slot ${slotNumber} failed.`);
	// 		return game.state.restoreMode = false;
	// 	}
	// 	return console.p(`Game saved to slot ${slotNumber}`);
	// }

	
	// const _restore = (command) => {
	// 	let keys = Object.keys(localStorage);
	// 	let saves = keys.filter((key) => {
	// 		return key.indexOf("ConsoleGame.save") !== -1;
	// 	});
	// 	if (saves.length > 0) {
	// 		let slotList = saves.map((save) => {
	// 			let x = save.substring(save.length - 2);
	// 			return x;
	// 		})
	// 		console.info(`saved games:\n${slotList}`);
	// 		game.state.restoreMode = true;
	// 		game.state.saveMode = false;
	// 		game.state.pendingAction = command;
	// 		const infoStyle = `font-size:100%;color:#75715E;font-family:${primaryFont};`;
	// 		const boldInfo = infoStyle + `font-weight:bold;color:white`;
	// 		console.info("Please choose which slot number (0 – 9) to restore from. To restore, type an underscore, immediately followed by the slot number.");
	// 		return console.inline([`For example, type `, `_3`, ` to select slot 3.`],[infoStyle, boldInfo, infoStyle]);
	// 	}
	// 	return console.info("No saved games found.");
	// }

	const _poof = () => {
		const body = document.querySelector("body");
		body.parentNode.removeChild(body);
		return console.papyracy(">poof<");
	}

	// const _papyracy = () => {
	// 	const font = primaryFont;
	// 	const color = textColor;
	// 	return function papyracy () {
	// 		primaryFont = primaryFont === "Papyrus" ? "";
	// 		textColor = "chartreuse";
	// 	}
	// }

	const _start = game._start;
	const _help = game._help;
	const _commands = game._commands;
	const _restore = game._restore;
	const _save = game._save;
	const _save_slot = game._save_slot;
	const _quit = game._quit;
	const cases = game.cases;

	const aliasString = (word, thesaurus = null, optionalString = "") => {
		// thesaurus will be added to params
		let variations = [];
		if (thesaurus){
			const synonyms = thesaurus[word] || [];
			variations = synonyms.filter((synonym) => {
				if (synonym.indexOf(" ") === -1){
					return cases(synonym);
				}
			});
		}
		return `${cases(word)},${variations.join()}${optionalString ? "," +optionalString : ""}`;
	}
	// Command aliases
	const aliases = [
		// Start
		[_start, cases("start", "resume")],
		// Move
		[_move, cases("north") + ",n,N"],
		[_move, cases("south") + ",s,S"],
		[_move, cases("east") + ",e,E"],
		[_move, cases("west") + ",w,W"],
		[_move, cases("up") + ",u,U"],
		[_move, cases("down") + ",d,D"],

		// Actions
		[_wait, cases("wait") + ",z,Z"],
		[_look, cases("look", "see", "observe") + ",l,L"],
		[_inventory, cases("inventory") + ",i,I"],
		[_act_upon, aliasString("use", thesaurus)],
		[_act_upon, aliasString("take", thesaurus)],
		[_act_upon, aliasString("read", thesaurus)],
		[_act_upon, aliasString("examine", thesaurus, "x,X")],
		[_act_upon, aliasString("drink", thesaurus)],
		[_act_upon, aliasString("drop", thesaurus)],
		[_act_upon, aliasString("pull", thesaurus)],
		[_act_upon, aliasString("spray", thesaurus)],
		[_act_upon, aliasString("contemplate", thesaurus)],
		[_act_upon, cases("hide")],

		// Objects
		[_items, cases("grue_repellant", "repellant")],
		[_items, cases("key")],
		[_items, aliasString("note", thesaurus)],
		[_items, cases("no_tea")],
		[_items, cases("chain")],
		[_items, aliasString("glove", thesaurus)],
		[_items, cases("catalogue", "catalog")],
		[_items, cases("all")],



		// Misc
		[_inventoryTable, cases("inventoryTable", "invTable", "invt")],
		[_help, cases("help") + ",h,H"],
		[_commands, cases("commands") + ",c,C"],

		// [_all, cases("all")],
		[_save, cases("save")],
		[_save_slot, "_0,save0,Save0,SAVE0"],
		[_save_slot, "_1,save1,Save1,SAVE1"],
		[_save_slot, "_2,save2,Save2,SAVE2"],
		[_save_slot, "_3,save3,Save3,SAVE3"],
		[_save_slot, "_4,save4,Save4,SAVE4"],
		[_save_slot, "_5,save5,Save5,SAVE5"],
		[_save_slot, "_6,save6,Save6,SAVE6"],
		[_save_slot, "_7,save7,Save7,SAVE7"],
		[_save_slot, "_8,save8,Save8,SAVE8"],
		[_save_slot, "_9,save9,Save9,SAVE9"],
		[_restore, cases("restore", "load")],
		[_pref, cases("font")],
		[_pref, cases("color")],
		[_pref, cases("size")],
		[_poof, cases("poof")],
		[_quit, cases("quit")],
		[_quit, cases("restart")]
	];
	ALIASES = aliases;
	return aliases;
};//)();

export default Commands;