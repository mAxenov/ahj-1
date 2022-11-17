// TODO: write code here

const { default: Game } = require('./components/game');
const { default: GameMechanics } = require('./components/GameMechanics');

// comment this to pass build
document.addEventListener('DOMContentLoaded', () => {
  const game = new Game('.board');
  const gameMech = new GameMechanics('.board', game.deleteElement);
  game.startGame();

  // console.log(game.createElement());
  // game.addElement(10);
  // game.deleteElement(10);
});

// for demonstration purpose only
