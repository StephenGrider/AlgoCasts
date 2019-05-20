const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse reverses a long string', () => {
  expect(reverse('This is a LoNg, case-sensitive String')).toEqual('gnirtS evitisnes-esac ,gNoL a si sihT');
});
