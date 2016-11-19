// function getTempCallback(location, callback) {
//   callback(undefined, 78);
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000)
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// Challenge Area

function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    }
    reject('One of the inputs is not a number');
  });
}

addPromise(1,2).then(function(sum) {
  console.log(sum)
}, function(err) {
  console.log(err);
});

addPromise(1,'Ben').then(function(sum) {
  console.log(sum)
}, function(err) {
  console.log(err);
});
