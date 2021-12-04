// Load the dataset
const reader = require("../Utils/readFile");
const data = reader.readFile(`${__dirname}\\input.txt`);

const movementMap = {
    forward: (coord, move) => coord.x = coord.x + parseInt(move),
    down: (coord, move) => coord.y = coord.y + parseInt(move),
    up: (coord, move) => coord.y = coord.y - parseInt(move)
}

const getAnswer1 = () => {
    let coord = {
        x: 0,
        y: 0
    }

    data.forEach((cmd) => {
        const [command, move] = cmd.split(' ');
        movementMap[command](coord, move);
    });

    return coord;
}

let answer1 = getAnswer1();
console.log(`Answer 1 final coords: ${answer1.x}, ${answer1.y} = `, answer1.x * answer1.y);

const movementMap2 = {
    forward: (coord, move) => {
        coord.x = coord.x + parseInt(move);
        coord.y = coord.y + (coord.aim * parseInt(move))
    },
    down: (coord, move) => coord.aim = coord.aim + parseInt(move),
    up: (coord, move) => coord.aim = coord.aim - parseInt(move),
}

const getAnswer2 = () => {
    let coord = {
        x: 0,
        y: 0,
        aim: 0
    }

    data.forEach((cmd) => {
        const [command, move] = cmd.split(' ');
        movementMap2[command](coord, move);
    });

    return coord;
}

let answer2 = getAnswer2();
console.log(`Answer 2 final coords: x=${answer2.x}, y=${answer2.y}, aim=${answer2.aim} = `, answer2.x * answer2.y);
