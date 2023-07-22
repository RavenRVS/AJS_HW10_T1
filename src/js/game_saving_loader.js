import read from './reader';
import parser from './parser';
import GameSaving from './game_saving';

export default class GameSavingLoader {
  static async load() {
    return read()
      .then((data) => parser(data)
        .then((value) => {
          const parseValue = JSON.parse(value);
          const gameSaving = new GameSaving(parseValue);
          return (gameSaving);
        }))
      .catch((error) => (error));
  }
}
