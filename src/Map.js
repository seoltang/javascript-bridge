const { UP } = require('./Command');
const { CORRECT, WRONG, UNSELECT } = require('./Message').map;

class Map {
  #upperRow;
  #lowerRow;

  constructor() {
    this.#upperRow = [];
    this.#lowerRow = [];
  }

  record(isMovable, movingCommand) {
    const newCharacter = isMovable ? CORRECT : WRONG;
    const isUp = movingCommand === UP;

    this.#upperRow.push(isUp ? newCharacter : UNSELECT);
    this.#lowerRow.push(isUp ? UNSELECT : newCharacter);

    return [this.#upperRow, this.#lowerRow];
  }
}

module.exports = Map;
