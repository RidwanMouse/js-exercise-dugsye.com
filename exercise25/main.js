const numbers = [1,2,3];

const allnumbers = [...numbers, 4,5,6];

console.log(allnumbers)


function  multiply(...numbers) {
    return numbers.reduce((total,multiply)=> total * multiply)

}

console.log(multiply(5,30,20,100))