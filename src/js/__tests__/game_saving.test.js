import GameSaving from '../game_saving';

describe('GameSaving', () => {
  it('should successfully load game saving', () => {
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

    const gameSaving = new GameSaving(saveObj);

    expect(gameSaving.id).toEqual(saveObj.id);
    expect(gameSaving.created).toEqual(saveObj.created);
    expect(gameSaving.userInfo).toEqual(saveObj.userInfo);
  });
});
