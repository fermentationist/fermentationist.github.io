const s = {
  logo: 'font-family: Georgia, serif; font-style: italic; font-size: 20px; font-weight: 300; color: #1A3FD4; letter-spacing: -0.02em;',
  dim:  'font-family: monospace; font-size: 11px; color: #8C8880;',
  cmd:  'font-family: monospace; font-size: 12px; color: #1A3FD4; font-weight: 500;',
};

console.log('%cDennis Hodges', s.logo);
console.log(' ');
console.log('%c  consolegame%c  — text adventure', s.cmd, s.dim);
console.log('%c  chatconsole%c  — multiplayer chat', s.cmd, s.dim);

let chatReady = false;
let gameReady = false;

function defineCommand(name, fn) {
  Object.defineProperty(globalThis, name, {
    configurable: true,
    get() {
      return fn();
    },
  });
}

defineCommand('consolegame', function () {
  if (gameReady) {
    console.log('%cConsoleGame already running.', s.dim);
    return undefined;
  }
  gameReady = true;
  console.log('%cLoading ConsoleGame...', s.dim);
  const prevOnload = window.onload;
  const script = document.createElement('script');
  script.src = 'https://www.dennis-hodges.com/ConsoleGame/dist/index.js';
  script.type = 'text/javascript';
  script.onerror = () => {
    gameReady = false;
    console.log('%cFailed to load ConsoleGame.', s.dim);
  };
  script.onload = () => {
    // ConsoleGame sets window.onload for init, but the load event has already
    // fired — trigger it manually.
    if (typeof window.onload === 'function' && window.onload !== prevOnload) {
      window.onload(new Event('load'));
    }
  };
  document.body.appendChild(script);
  return undefined;
});

defineCommand('chatconsole', function () {
  if (chatReady) {
    console.log('%cChat console already running.', s.dim);
    return undefined;
  }
  chatReady = true;
  console.log('%cConnecting to chat console...', s.dim);
  const script = document.createElement('script');
  script.src = 'https://chat-console.onrender.com/chatConsole.js';
  script.type = 'module';
  script.onerror = () => {
    chatReady = false;
    console.log('%cFailed to connect.', s.dim);
  };
  document.body.appendChild(script);
  return undefined;
});
