// A CALLBACK IS JUST A FUNCTION THAT IS BEING PASSED IN AS AN ARGUMENT
//TO ANOTHER FUNCTION

// const par = (word) => {
//     console.log(word)
// }

// const second = () => {
//     console.log("hi"); 
// }

// second(par("marialaina"));

// const foo = (param, param2) => {
//     param(param2);
// }

// const bar = (param) => {
//     console.log(param);
// }

// foo(bar, "hi");

// const foo = (param, param2) => {
//     param(param2, "hello");
// }

// const bar = (param, param2) => {
//     console.log(param2)
// }

// const baz = (param) => {
//     console.log(param.toUpperCase());
// }

// foo(baz, 'hello')

// const myFunc1 = (aFunc) => {
//     aFunc("Hello");
// }

// myFunc1(console.log)

// myArr = [1,2,3,4,5]

// const filter = (value, index) => {
//     return value < 3
// }

// const newArr = myArr.filter((value, index) => {
//     return value < 3;
// });

// console.log(newArr)

const electricMixer = (attachment) => {
    console.log(`This mixer is now: ` + attachment())
}

// electricMixer(() => {
//     return "spiralizing";
// });

const spiralizer = () => {
    return "spiralizing";
}

const slicerDicer = () => {
    return "slicin` and dicin'";
};

const blender = () => {
    return "making a smoothie";
}

// electricMixer(spiralizer);
// electricMixer(slicerDicer);
// electricMixer(blender);

// functionName(CALLBACK, MILLISECONDS)

// setTimeout(() => {
//     console.log(`It's ready`);
// }, 2000)

// setInterval(() => {
//     console.log("It's ready")
// }, 2000);

const wordReverse = (word) => {
    const x = word.split('').reverse().join('');
    
    return x;
}

const toUpperCase = (word) => {
    return word.toUpperCase();
}

const repMaster = (arg, word) => {
    console.log("Never give your heart to a blockhead " + word(arg))
    console.log("I finished this practice", word(arg))
}




repMaster("messi", wordReverse)
repMaster("I'm top 10!!!", toUpperCase)




