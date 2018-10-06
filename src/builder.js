import Cell from './cell';
import Mediator from './mediator';

export default function(rowNum, colNum) {
  /*
   * セル全体に通知を刷るオブジェクト
   */
  const mediator = new Mediator();
  /**
   * DOM生成
   */
  // すべてのcellをつつむDOM
  const cellWrapperElement = document.getElementById("cellWrapper");
  for(let i = 0; i < rowNum; i++) {
    // row要素作成
    const rowElement = createRowElement();
    for(let j = 0; j < colNum; j++) {
      // cell要素作成
      const cellElement = createCellElement();
      // cellオブジェクトの生成とmediatorへの追加
      const cellModel = new Cell(cellElement, j, i);
      cellModel.setMediator(mediator);
      mediator.addCell(cellModel);
      // 行に追加
      rowElement.appendChild(cellElement);
    }
    // 行描画
    cellWrapperElement.appendChild(rowElement)
  }
}

function createRowElement() {
  const rowElement = document.createElement("div");
  rowElement.classList.add('row');
  return rowElement;
}

function createCellElement() {
  const cellElement = document.createElement('div');
  cellElement.classList.add('cell');
  return cellElement;
}
