import Cell from './cell';
import Mediator from './mediator';

export default function(rowNum, colNum) {
  const cellElements = document.getElementsByClassName("cell");
  const mediator = new Mediator();
  const cellWrapperElement = document.getElementById("cellWrapper");
  /**
   * DOM生成
   */
  for(let i = 0; i < rowNum; i++) {
    // row要素作成
    const rowElement = document.createElement("div");
    // 行element
    rowElement.classList.add('row');
    for(let j = 0; j < colNum; j++) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      // 描画
      rowElement.appendChild(cellElement);
      // object生成
      const cell = new Cell(cellElement, j, i);
      cell.setMediator(mediator);
      mediator.addCell(cell);
    }
    cellWrapperElement.appendChild(rowElement)
  }
}
