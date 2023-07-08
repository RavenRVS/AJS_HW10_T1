import GameSavingLoader from '../game_saving_loader';

describe('GameSavingLoader', () => {
  it('should successfully load game saving', async () => {
    const expectedGameSaving = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    };

    const gameSaving = await GameSavingLoader.load();

    expect(gameSaving).toEqual(expectedGameSaving);
  });
});
