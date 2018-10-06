export default class Cell {
  constructor(el, col, row) {
    this.el  = el
    this.col = col;
    this.row = row;
    this.el.addEventListener('mouseover', (e) => {
      this.mediator.notify(this);
    })
  }
  setMediator(mediator) {
    this.mediator = mediator;
  }
  activate() {
    this.el.classList.add('active');
  }
  iactivate() {
    this.el.classList.remove('active');
  }
}
