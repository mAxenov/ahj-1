// TODO: write code here

const { default: Game } = require('./game');

// comment this to pass build
document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(document.querySelector('.board'));
  game.startGame();
  // console.log(game.createElement());
  // game.addElement(10);
  // game.deleteElement(10);
});

// for demonstration purpose only
