const input = [
    ["key1", 1, 2, 3, 4],
    ["key2", 4, 5, 6, 7]
]

function transform (input) {
    const res = {};
    input.map((array) => {
        const [Key] = array;
        array.shift();
        res[`${Key}`] = array;
    })
    return (res);
}

const output = transform(input);
console.log(output);

//output should be
//output :
// {
//   key1: [1, 2, 3, 4],
//   key2: [4, 5, 6, 7],
// }