const posts = [
  {
    title: 'post one',
    body: 'This is post one'
  },

  { title: 'post two', body: 'This is post two' }
];

function getPosts() {
  //takes a callback function
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//promise
function createPost(post) {
  //promise takes in two parameters resolve and reject
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error something went wrong');
      }
    }, 2000);
  });
}
/*
createPost({ title: 'Post three', body: 'This is post three' })
  .then(getPosts)
  .catch(err => console.log(err));
*/

//Async //Await
/*
async function init() {
  await createPost({ title: 'Post three', body: 'This is post three' });

  getPosts();
}

init();

*/
//Async //Await //fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  //response from fetch must be converted  to JSON
  const data = await res.json();

  console.log(data);
}

fetchUsers();
//Promise.all
//resolve is what is returned in a promise if success
/*
const promise1 = Promise.resolve('Hello word');
const promise2 = '10';
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
  res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);
*/
