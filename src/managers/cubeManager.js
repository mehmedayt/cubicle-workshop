const cubes = []
const uniqid = require('uniqid');


exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
};