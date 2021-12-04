// Load the dataset
const reader = require("../Utils/readFile");
const data = reader.readFile(`${__dirname}\\input.txt`);

const processData = () => {
    let result = data.reduce((accumulator, current, index, data) => {
        if (index !== 0 && parseInt(current) > parseInt(data[index - 1])) {
            return accumulator + 1;
        }
        return accumulator;
    }, 0);
    return result;
}


let answer1 = processData();
console.log("Answer 1: ", answer1);

// let result2 = findTriple(data, 2020);
// console.log("Result: ", result2);
// console.log("Answer: ", result2[0] * result2[1] * result2[2]);