/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const line1 = ' _     _  _     _  _  _  _  _ '
const line2 = '| |  | _| _||_||_ |_   ||_||_|'
const line3 = '|_|  ||_  _|  | _||_|  ||_| _|'

const num1 = []
const num2 = []
const num3 = []

const n1 = [' _ ', '   ',  ' _ ', ' _ ', '   ',  ' _ ', ' _ ', ' _ ', ' _ ', ' _ ']
const n2 = ['| |', '  |', ' _|', ' _|', '|_|', '|_ ', '|_ ', '  |', '|_|', '|_|']
const n3 = ['|_|', '  |', '|_ ', ' _|', '  |', ' _|', '|_|', '  |', '|_|',' _|']

for (let i = 3; i <= line1.length; i+=3) {
    char1 = line1.substring(i-3,i-2)+line1.substring(i-2,i-1)+line1.substring(i-1,i)
    num1.push(char1)
    char2 = line2.substring(i-3,i-2)+line2.substring(i-2,i-1)+line2.substring(i-1,i)
    num2.push(char2)
    char3 = line3.substring(i-3,i-2)+line3.substring(i-2,i-1)+line3.substring(i-1,i)
    num3.push(char3)
}

let number = ''

for (let i = 0; i < num1.length; i++) {
    for(let j = 0; j < 10; j++) {
        if(num1[i] === n1[j] && num2[i] === n2[j] && num3[i] === n3[j]) {
            console.log(j)
            number += j.toString()
        }
    }
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(number);