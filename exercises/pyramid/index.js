// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid (n) {
  const fullWidth = 2 * n - 1;
  for (let levelNumber = 1; levelNumber <= n; levelNumber++) {
    const blocksCount = 2 * levelNumber - 1;
    const spacesCount = fullWidth - blocksCount;

    const blocks = '#'.repeat(blocksCount);
    const spacesOnOneSide = ' '.repeat(spacesCount / 2);
    console.log(spacesOnOneSide + blocks + spacesOnOneSide);
  }
}

module.exports = pyramid;