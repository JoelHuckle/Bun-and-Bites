const shows = ['family guy', 'breaking bad', 'office']
shows.forEach(n => console.log(n));

const numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers.filter(n => n%2 === 0));

let arrayTest =[1,6,5,3]

function sumSecondLowAndHigh(arr){
    arr = arr.sort()
    return arr[1] + arr[arr.length - 2];
}

console.log(sumSecondLowAndHigh(arrayTest));