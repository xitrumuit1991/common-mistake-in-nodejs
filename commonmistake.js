const async = require("async");
const http = require('http');
const _ = require('lodash');

/*let validateObject = (obj)=>{
  if (typeof obj !== 'object') {
    throw new Error('Invalid object');
  }
};
try {
  validateObject('123');
}catch (err) {
  console.log('Catch Thrown: ' + err.message);
}

let validateObjectB = (obj, callback)=>{
  setTimeout(()=>{
    if (typeof obj !== 'object') {
      throw new Error('Invalid object');
    }
    return callback(null);
  },1000);
};
try{
  validateObjectB('123', (err)=>{
    console.log('Callback err=: ',err);
  });
}catch(error){
  console.log('catch Callback error=: ',error);
}*/



//------------------------------------------------------------
/*let promiseEx = new Promise((resolve, reject)=>{
  setTimeout(function() {
    throw 'Uncaught Exception!';
  }, 1000);
});
promiseEx.catch((e)=>{
  console.log('Here catch error=', e);
});*/


//------------------------------------------------------------
let exPromise = (item)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('exPromise item=', item);
      resolve(item);
    }, 1000);
  });
};
async.eachSeries(['aaa','bbb','ccc'], async (item)=>{
  console.log('item', item);
  await exPromise(item)
}, (err)=>{
  if(err)
    console.log(`async.each; err=`,err);
  else
    console.log(`async.each; all done`);
});




//------------------------------------------------------------
/*function slugifyUsername(username) {
  if(typeof username !== 'string') {
    throw new TypeError('expected a string username, got '+(typeof username))
  }
  // ...
}
try {
  var usernameSlug = slugifyUsername(101)
} catch(e) {
  console.log('Oh no!',e)
}*/





//------------------------------------------------------------
/*function foo(a, b, cb) {
  setTimeout(() => {
    cb(new Error('Custom Error Inside Callback'));
  }, 1);
}
const getThePromise = () => {
  //throw new Error('Custom Error outside Callback');
  return new Promise((resolve, reject) => {
    foo('aaaa', 'bbbb', (err) => {
      //throw err;       // catch not called
      reject(err);  // catch called
    });
  });
};
getThePromise().then((res) => {
  console.log('getThePromise: Then...', res);
}).catch((err) => {
  console.log('getThePromise: CATCH:', err);
});*/


//------------------------------------------------------------
let server = http.createServer((req, res) => {

  console.log(`--------------------------------`);
  /*getThePromise().then((res) => {
    console.log('getThePromise: Then...', res);
  }).catch((err) => {
    console.log('getThePromise: CATCH:', err);
  });*/

  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
server.setMaxListeners(0);
console.log('Server running at http://127.0.0.1:1337/. Process PID: ', process.pid);
//------------------------------------------------------------
