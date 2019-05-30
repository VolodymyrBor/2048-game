import {cellStates} from './cellManager'
function removeAndIncreaseCells (cells) {
  return cells.filter(cell => cell.state !== cellStates.DYING).map(cell => {
    cell.score = 0
    if (cell.state === cellStates.INCREASE) {
      cell.value *= 2
      cell.score = cell.value
    }

    cell.state = cellStates.IDLE
    return cell
  })
}

export {removeAndIncreaseCells}
