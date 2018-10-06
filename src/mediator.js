export default class Mediator {
  constructor() {
    this.cellsArray = [];
  }
  addCell(cell) {
    this.cellsArray.push(cell);
  }
  notify(cell) {
    const targetCell = cell;
    const targetCellColl = targetCell.col;
    const targetCellRow = targetCell.row;
    this.cellsArray.map(cell => {
      if (cell.col <= targetCellColl && cell.row <= targetCellRow) {
        cell.activate();
      } else {
        cell.iactivate();
      }
    });
  }
}
