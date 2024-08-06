function diceGame(teleporters5, dice_sides, start_pos, end_pos) {
    let splitArrays = [];
    let objectPairs = {};
    let result = [];
  
    for (let i = 0; i < teleporters5.length; i++) {
      splitArrays.push(teleporters5[i].split(','));
    }
    // console.log(splitArrays);
    for (let i = 0; i < splitArrays.length; i++) {
      objectPairs[splitArrays[i][0]] = splitArrays[i][1];
    }
    // console.log(objectPairs);
  
    for (let i = 0; i < dice_sides; i++) { // Assuming dice_sides is supposed to be the number of dice sides
      let dice_roll = start_pos + i + 1; // Simulating dice roll from 1 to dice_sides
      if (objectPairs[dice_roll.toString()]) {
        result.push(objectPairs[dice_roll.toString()]);
      }
      console.log(dice_roll);
  
      if (dice_roll >= start_pos && dice_roll <= end_pos) {
        result.push(dice_roll);
      }
    }
  
    console.log(result);
    console.log('done')
  }
  
  diceGame(["3,10", "6,15"], 6, 2, 20); // Example call to the function