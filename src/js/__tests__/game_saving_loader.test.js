import GameSaving from '../game_saving';
import GameSavingLoader from '../game_saving_loader';

test('should successfully load game saving', async () => {
  const saveObj = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const expectedGameSaving = new GameSaving(saveObj);
  const gameSaving = await GameSavingLoader.load();

  expect(gameSaving).toEqual(expectedGameSaving);
});
