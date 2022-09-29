# ConsoleGame
---
Being someone who has spent literally decades interacting with CLIs on a near-daily basis, and who is also a huge fan of old text adventures, I wanted to see if a text-based game could be implemented in the browser's JavaScript console. ConsoleGame is my attempt to accomplish this.

Open the console in your browser's developer tools to check it out! (press F12).

There are several limitations of the browser console that made this project an interesting challenge. First, the console provides no way to directly read user input (I was hoping I could use `process.argv` like in Node, but alas!). This problem can be solved by implementing the commands available to the user as methods of the global object. Another small limitation is that user input cannot begin with numerals or many other characters because when used as property names, they cannot be accessed without using `Object[propertyName]` syntax, which will not work for our purposes.

However, this is not ideal, as the user would need to type the invocation operator after the command in order to invoke the function. The solution to this particular issue took me a while to find, but it was to assign the command functions to accessor properties (getters) instead of normal data properties of the global object. This allows the function to be called without the invocation operator.  

As much as I would like to take credit for this clever solution, I borrowed it from Github user secretGeek (thank you!) who, I discovered, had already made such a game, which you can play [here](https://rawgit.com/secretGeek/console-adventure/master/console.html). While I was working on this project, Google also released a text adventure in the console, as an easter egg when you perform a search for "[text adventure](https://www.google.com/search?ei=xGPaXLKbGYqWsgX5qrH4Cg&q=text+adventure&oq=text+adventure&gs_l=psy-ab.3..35i39j0i131i67j0i67j0l7.8206.9252..10110...0.0..0.79.146.2......0....1..gws-wiz.......0i71j0i131j0i7i30.5MBQCX4RoVE)".

Another restriction I encountered is that only one-word commands will work, because the presence of any spaces in user input will throw a `SyntaxError`. Therefore, in order to implement a compound, two-word command, like "get lamp", the command words must be separated by either a carriage return or a semicolon. A further small inconvenience of this system is that user input cannot begin with numerals or many other characters because when used as property names, they cannot be accessed without using `Object[propertyName]` syntax, which will not work for our purposes.

It was was not immediately obvious to me how to relate an action and its object, because each was a separate function call, passed without any arguments. My solution was to maintain a global state, recording information about previous commands, and keeping a series of flags to be set by a command in order to change the program’s behavior with regard to subsequent commands. 

For example, when a command represents an action (`get`) to be applied to an object, like a character or item (`lamp`), calling it will set a flag (`objectMode = true`) and store the name of the action (`pendingAction = "get"`), so that the next command will be interpreted as the object of the stored action.

The various action commands that involve objects are actually all only aliases of a single function, `_act_upon`, that sets the `objectMode` flag to `true` and assigns the name of the command to a variable, `pendingAction`. The function that will actually implement the action exists as a method on the target object (i.e. `lamp.get()`).

Any tasks that needed be performed every turn, like recording history and determining which commands will increment the turn counter, are executed by a function, turnDemon, that is bound to each command when it is set as an accessor property of the global object.

---

## How to Play

Valid commands are one word long, with *no spaces*. Compound commands consist of *at most two commands, separated by a carriage return or a semicolon*. For example:
````
get
````
*What would you like to take?*
````
lamp
````
*You pick up the lamp.*

or,
````
get;lamp
````
*What would you like to take?
You pick up the lamp.*

When the game loads, you will be asked to type **`start`** to start a new game, **`resume`** if the history of a previous game persists in `localStorage`. You can type **`restore`** to load a previously saved game. 

At any time once the game begins, typing **`inventory`** or **`i`** will display a list of any items the player is carrying. Typing **`look`** or **`l`** will give you a description of your current environs in the game. 

In the game's current form, there are no prepositions, and `look` will only be used for this purpose, and not to "look at" something. Please instead use **`examine`** or its shortcut **`x`** instead. For example:
````
examine
````
*What would you like to examine?*

````
lamp
````
*A battery-powered brass lantern is on the trophy case.*

Because the game map consists of a multidimesional array of strings, it is gridlike by nature, and movement has therefore been restricted to the cardinal directions, **`north`**, **`south`**, **`east`**, and **`west`**, as well as **`up`** and **`down`**. These may be abbreviated as **`n`**, **`s`**, **`e`**, **`w`**, **`u`** and **`d`**, respectively.

You may save your game progress (it will be saved to `localStorage`) by typing **`save`**. You will then be asked to select a save slot, **`_0`** through **`_9`** (remember, user input can't begin with a number). Typing **`help`** will display the in-game help text.



---
## License

#### Copyright © 2019 [Dennis Hodges](https://github.com/fermentationist) 


__The MIT License__

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



