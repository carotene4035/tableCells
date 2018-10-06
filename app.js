import Cell from './cell';
import Mediator from './mediator';

const cellElements = document.getElementsByClassName("cell");
const mediator = new Mediator();
const cellWrapperElement = document.getElementById("cellWrapper");

// 初期化
const rowNum = 7;
const colNum = 7;

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
    console.log(cell);
    cell.setMediator(mediator);
    mediator.addCell(cell);
  }
  cellWrapperElement.appendChild(rowElement)
}

