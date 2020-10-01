function average(){
    let values = [2, 56, 3, 41, 0, 4, 100, 23];
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;
console.log(avg)
// avg = 28
}
average();
