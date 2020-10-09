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
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.
          if (maxValue) {
              if(mountainH > maxValue) {
                  maxValue = mountainH
                  maxIndex = i
              }
          }
          else {
              maxValue = mountainH
              maxIndex = i
          }
    }
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    console.log(maxIndex)

    //console.log('4');     // The index of the mountain to fire on.

}