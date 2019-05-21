// IIFE returns three-dimensional array of maps
const maps = (function (){

	// This function uses .split() to convert an array of simplified maps from one to two-dimensional arrays, and then return them in the order given as a three-dimensional array.
	const processMaps = (arrayOfMapStrings) => {
		let expandedMap;
		let output = [];
		arrayOfMapStrings.map((mapString) => {
			expandedMap = mapString.map((line) => {
				return line.split("");
			});
			output.push(expandedMap);
		});
		return output;
	}

	// Maps are simplified as arrays of strings. Asterisks are impassable boundaries. Maps should be contained by a perimeter of asterisks to limit x-axis and y-axis, and and upper and lower boundary of asterisks to limit Z-axis. Floor separator maps mark locations that z-axis can be traversed.
	const boundary = [
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************"
	];

	const basement = [
		"****************",
		"***RQP@*********",
		"***S#***********",
		"***TUV**********",
		"*****W**********",
		"*****XY*********",
		"******Z*********",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************"
	];

	const floorSeparator1 = [
		"****************",
		"****************",
		"****#***********",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"***************",
		"****************",
		"****************"
	];

	const groundFloor = [
		"****************",
		"****$***********",
		"****0000000000**",
		"****0000000000**",
		"*****@**********",
		"*****XY*********",
		"******Z*********",
		"****************",
		"****************",
		"****************",
		"****************",
		"******+%0*******",
		"******0%0*******",
		"******0%0*******",
		"*******A********",
		"****************"
	];

	const floorSeparator2 = [
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"****************",
		"******Z*********",
		"****************",
		"****************",
		"****************",
		"****************",
		"*******#********",
		"****************",
		"****************",
		"****************",
		"****************"
	];

	const secondFloor = [
		"****************",
		"***RQP@*********",
		"***S#***********",
		"***TUV**********",
		"*****W**********",
		"*****XY*********",
		"******Z*********",
		"****************",
		"****************",
		"****************",
		"****************",
		"*******^********",
		"*******$********",
		"****************",
		"****************",
		"****************"
	];

	return processMaps([boundary, basement, floorSeparator1, groundFloor, floorSeparator2, secondFloor, boundary]);
})();
export default maps;