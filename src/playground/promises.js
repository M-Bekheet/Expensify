const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Mahmoud',
    //   job: 'Web Developer'
    // })
    reject('Something went wrong!')
  }, 3000)
})

console.log('before');

promise.then(data => {
  console.log(`My name is ${data.name} and I am a ${data.job}`);
}, error => console.log('error: ', error) )

console.log('after');
