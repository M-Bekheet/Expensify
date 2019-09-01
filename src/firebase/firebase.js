import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId:process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider , database as default }

// database.ref('expenses')
//   .on('value', snapshot => {
//     let expenses = []
//     snapshot.forEach(snapChild => {
//       expenses.push({
//         id: snapChild.key,
//         ...snapChild.val()
//       })  
//     })
//     console.log(expenses);
//   })

// const expenses = [
//   {
//     description: 'Gas Bill',
//     amount: 4945,
//     createdAt: 4554,
//     note: ''
//   },
//   {
//     description: 'Electricity Bill',
//     amount: 150,
//     createdAt: 22,
//     note: 'Paid it with visa'
//   },
//   {
//     description: 'Network Subscribtion',
//     amount: 180,
//     createdAt: 0,
//     note: ''
//   },
// ]

// expenses.forEach(expense => {
//   database.ref('expenses').push(expense)
// })

// database.ref().update({
//   name: 'Adam',
//   age: 45,
//   'location/city': 'Alex'
// })

// database.ref('name').remove()

// database.ref('attributes').set(
//   {
//     height: 188,
//     weight: 86
//   }
// )
//   .then(() =>  console.log('Data Saved!'))
//   .catch(err => console.log('Something went wrong: ', err))

// database.ref().remove()
//   .then(() => console.log('Attributed were removed'))
//   .catch(error => console.log('Error happened on remove', error))
