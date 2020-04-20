'use strict'
const universal = function (data) {
    // if (typeof data === 'string') {
    //     console.log("string")
    // }
    // if (typeof data === 'object') {
    //     console.log("object")
    // }
    // if (typeof data === 'array') {
    //     console.log("array")
    // }
    const JS = {
        array: {
            constructor: {
                name: "Function"
            }
        },
        string: {
            constructor: {
                name: "Number"
            }
        },
        
    }
    const str = new Array(1,2,3,4,5);
    const arr = [1,2,3,4,5]
    console.log(str)
    console.log(arr)
    // if (data.constructor.name === 'Function') {
    //         console.log('This is Function')
    //     }
    // if (data.constructor.name === 'String') {
    //     console.log('This is string')
    // }
    // if (data.constructor.name === 'Number') {
    //     console.log('This is Number')
    // }
    // if (data.constructor.name === 'Array') {
    //     console.log('This is Array')
    // }
}


universal(3)
universal([1,2,3,4])