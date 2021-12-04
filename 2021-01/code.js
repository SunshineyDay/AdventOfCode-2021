// Load the dataset
const reader = require("../Utils/readFile");
const data = reader.readFile(`${__dirname}\\input.txt`);

const getAnswer1 = () => {
    let result = data.reduce((accumulator, current, index, data) => {
        if (index !== 0 && parseInt(current) > parseInt(data[index - 1])) {
            return accumulator + 1;
        }
        return accumulator;
    }, 0);
    return result;
}

const sumArray = (prev, curr) => parseInt(prev) + parseInt(curr);

const getAnswer2 = () => {
    let result = data.reduce((accumulator, current, index, originalArray) => {

        if (index <= data.length - 2) {
            let window1 = data.slice(index, index + 3);
            let window2 = data.slice(index + 1, index + 1 + 3);

            if (window1.reduce(sumArray) < window2.reduce(sumArray)) {
                return accumulator + 1;
            }
            return accumulator;
        }
        return accumulator;

    }, 0);

    return result;
}


let answer1 = getAnswer1();
console.log("Answer 1: ", answer1);

let answer2 = getAnswer2();
console.log("Answer 2: ", answer2);
