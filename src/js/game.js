import img from '../img/goblin.png';

export default class Game {
  constructor(element) {
    this.element = element;
    this.lastAddedElement = undefined;
    this.setIntervalId = 0;
  }

  getRandomIndex() {
    const max = this.element.querySelectorAll('.board-item').length - 1;
    let index;
    do {
      index = Math.floor(Math.random() * (max - 0 + 1) + 0);
    } while (index === this.lastAddedElement);
    return index;
  }

  deleteElement(position) {
    const parentElement = this.element.querySelectorAll('.board-item');
    parentElement[position].querySelector('.board-item-img').remove();
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
      if (typeof this.lastAddedElement !== 'undefined') {
        this.deleteElement(this.lastAddedElement);
      }
      this.addElement(this.getRandomIndex());
    }, 1000);
  }
}
