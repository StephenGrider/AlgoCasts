const reverse = require('./index');
const reverseWithReduce = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});


test('Reverse function exists', () => {
  expect(reverseWithReduce).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseWithReduce('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseWithReduce('  abcd')).toEqual('dcba  ');
});
