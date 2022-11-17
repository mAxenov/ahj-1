import img from '../../img/goblin.png';

export default class Game {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this.deleteElement = this.deleteElement.bind(this);
    this.element = element;
    this.lastAddedElement = undefined;
    this.setIntervalId = 0;
    this.miss = 0;
  }

  getRandomIndex() {
    const max = this.element.querySelectorAll('.board-item').length - 1;
    let index;
    do {
      index = Math.floor(Math.random() * (max - 0 + 1) + 0);
    } while (index === this.lastAddedElement);
    return index;
  }

  deleteElement() {
    const element = this.getDeleteElement();
    if (element !== null) {
      element.remove();
    }
  }

  getDeleteElement() {
    if (typeof this.lastAddedElement === 'undefined') {
      return null;
    }
    const parentElement = this.element.querySelectorAll('.board-item');
    return parentElement[this.lastAddedElement].querySelector('.board-item-img');
  }

  addElement(position) {
    const elementImg = document.createElement('img');
    elementImg.src = img;
    elementImg.classList.add('board-item-img');
    const parentElements = this.element.querySelectorAll('.board-item');
    parentElements[position].append(elementImg);
    this.lastAddedElement = position;
  }

  startGame() {
    clearInterval(this.setIntervalId);
    this.setIntervalId = setInterval(() => {
      if (this.getDeleteElement() !== null) {
        this.miss++;
        if (this.miss >= 5) {
          alert('Game Over');
          this.stopGame();
          return;
        }
      }
      this.deleteElement();
      this.addElement(this.getRandomIndex());
    }, 1000);
  }

  stopGame() {
    clearInterval(this.setIntervalId);
  }
}
