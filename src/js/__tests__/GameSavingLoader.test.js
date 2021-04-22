import GameSavingLoader from '../GameSavingLoader';

test('test_1', async () => { // 74 слайд
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const awaitRes = await GameSavingLoader.load();
  expect(awaitRes).toEqual(result);
});
