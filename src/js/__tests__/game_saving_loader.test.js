import GameSavingLoader from '../game_saving_loader';
import * as reader from '../reader';
import * as parser from '../parser';

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should load game saving successfully', async () => {
    const fakeData = 'fakeData';
    const fakeParsedData = '{"key": "value"}';
    const expectedGameSaving = { key: 'value' };

    jest.spyOn(reader, 'default').mockResolvedValue(fakeData);
    jest.spyOn(parser, 'default').mockResolvedValue(fakeParsedData);

    const result = await GameSavingLoader.load();

    expect(result).toEqual(expectedGameSaving);
    expect(reader.default).toHaveBeenCalledTimes(1);
    expect(parser.default).toHaveBeenCalledTimes(1);
    expect(parser.default).toHaveBeenCalledWith(fakeData);
  });

  it('should reject with an error if reading data fails', async () => {
    const fakeError = new Error('Failed to read data');

    jest.spyOn(reader, 'default').mockRejectedValue(fakeError);
    jest.spyOn(parser, 'default').mockResolvedValue('');

    await expect(GameSavingLoader.load()).rejects.toThrow(fakeError);

    expect(reader.default).toHaveBeenCalledTimes(1);
    expect(parser.default).not.toHaveBeenCalled();
  });

  it('should reject with an error if parsing data fails', async () => {
    const fakeData = 'fakeData';
    const fakeError = new Error('Failed to parse data');

    jest.spyOn(reader, 'default').mockResolvedValue(fakeData);
    jest.spyOn(parser, 'default').mockRejectedValue(fakeError);

    await expect(GameSavingLoader.load()).rejects.toThrow(fakeError);

    expect(reader.default).toHaveBeenCalledTimes(1);
    expect(parser.default).toHaveBeenCalledTimes(1);
    expect(parser.default).toHaveBeenCalledWith(fakeData);
  });
});
