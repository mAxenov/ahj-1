import app from '../app';

test('демо', () => {
  const received = app(3);
  expect(received).toEqual(3);
});
