
let arr0 = [0,1,4,9,0];
let arr1 = [1,1,1,9,0];
let arr2 = [0,1,4,9,5,6,7,7,8,9];
let arr3 = [0];
let arr4 = [0,1,4,9,0];
let result = [];
let n0 = 5;

test(arr0, arr0.length);
// test(arr1,  arr1.length);
// test(arr2,  arr2.length);
// test(arr3,  arr3.length);
// test(arr4,  arr4.length);

function test(arr, n) {
    let result = [];
    for(let i = 0; i < arr.length;  i++){
        if(arr[i] === 0){
            result[i] = 0;
        }
        if(arr[i] !== 0){
            const right = search(arr, i, true);
            const left = search(arr, i, false);
            if(right === null) {
                result[i] = left;
            }
            else if(left === null) {
                result[i] = right;
            }

            else result[i] = right < left ? right : left;
        }
        
    }
    return result;
    
    
    function search(arr, index, isRight){
        let i = index;
        let value = 0;

        while(!isRight && i >= 0 || isRight && i < n ){
            i = i + (isRight ? 1 : -1);
            if(!(i >= 0 && i < arr.length)){
                value = null;
                break;
            }
            value = value + 1;
            if(arr[i] === 0){
                break;
            }
        }

        return value;
    }
}

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function solve() {
    const a = parseInt(_inputLines[0].trim(" "), 10);
    const b = _inputLines[1].trim(" ").split(" ").map(num => parseInt(num, 10));
    const answer = test(b, a);

    console.log(answer.join(' '));
} 


solve();
