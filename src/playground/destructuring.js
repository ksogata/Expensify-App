// Object destructuring

// const person = {
//   age: 23,
//   location: {
//     city: 'Rowland Heights',
//     temp: 61
//   }
// };
//
//
// const { name = 'anonymous', age } = person;
// console.log(`${name} is ${age}`);
//
// const { city, temp:temperature } = person.location;
// console.log(`It's ${temperature} in ${city}`);
//
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


// Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//
// const [ street, city, state='New York', zip ] = address;
//
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ product, , medCost] = item;
console.log(`A medium ${product} costs ${medCost}`);
