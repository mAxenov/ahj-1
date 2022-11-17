export default class GameMechanics {
  constructor(element, DeleteHandler) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this.onClick = this.onClick.bind(this);
    this.element = element;
    this.DeleteHandler = DeleteHandler;
    this.element.addEventListener('click', this.onClick);
    this.count = 0;
  }

  onClick(e) {
    if (e.target.closest('.board-item-img')) {
      this.count++;
      document.querySelector('#score').textContent = this.count;
      this.DeleteHandler();
    }
  }
}
