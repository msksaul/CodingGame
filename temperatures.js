/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

let closest = null

if(n===0) {
    closest=0
}
else {
    for (let i = 0; i < n; i++) {
        const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
        if(closest) {
            if(Math.abs(inputs[i])<=Math.abs(closest)){
                if(Math.sign(inputs[i]) === Math.sign(closest)) {
                    closest = inputs[i]
                }
                else {
                    closest = Math.abs(inputs[i])
                }
            }
        }
        else {
            closest = inputs[i]
        }
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(closest);