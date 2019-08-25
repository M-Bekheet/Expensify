// const person = {
//   name:  'Mahmoud',
//   age: 23,
//   location:{
//     country: 'Egypt',
//     city: 'Cairo'
//   },
//   temp: 100
// }

// const {name, age: omr} = person
// console.log(name, omr)

// const book = {
//   title: 'Ego of the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, , mediumCost ] = item;

console.log(`A medium ${itemName} costs ${mediumCost}`);