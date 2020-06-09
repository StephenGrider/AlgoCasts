const reverse_string = require('./index');

test('Reverse function exists', () => {
  expect(reverse_string).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse_string('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse_string('  abcd')).toEqual('dcba  ');
});
