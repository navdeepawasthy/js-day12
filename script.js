// function printAlphabets(letter, delay) {
//     setTimeout(() => {
//         console.log(letter)
//     }, delay)
// }

// printAlphabets('a', 1000)
// printAlphabets('b', 2000)
// printAlphabets('c', 3000)



// function printValue() {
//     setTimeout(() => {
//         console.log('First timeout')
//         setTimeout(() => {
//             console.log('Second Timeout')
//         }, 2000)
//     }, 2000)
// }

// printValue()

// function printAlphabets() {
//     setTimeout(() => {
//         console.log('A')
//         setTimeout(() => {
//             console.log('B')
//             setTimeout(() => {
//                 console.log('C')
//                 setTimeout(() => {
//                     console.log('D')
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }
// printAlphabets()

// function printLetter(letter, cb) {
//     setTimeout(() => {
//         console.log(letter)
//     }, 1000)
//     cb()
// }

// function printAlphabets() {
//     printLetter('A', () => {
//         printLetter('B', () => {
//             printLetter('C', () => {
//                 printLetter('D', () => {
//                     console.log('End')
//                 })
//             })
//         })
//     })
// }
// printAlphabets()