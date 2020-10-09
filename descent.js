/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/
let testArray = [0,6,0,5,0,8,0,6]
// game loop
while (true) {
  let maxValue = null
  let maxIndex = null
  let mountain = []
    for (let i = 0; i < 8; i++) {
        const mountainH = testArray; // represents the height of one mountain.
        mountain = mountainH
          if (maxValue) {
              if(mountainH[i] > maxValue) {
                  maxValue = mountainH[i]
              }
          }
          else {
              maxValue = mountainH[i]
          }
    }
    maxIndex = mountain.indexOf(maxValue)
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    console.log(maxIndex)

    //console.log('4');     // The index of the mountain to fire on.

}