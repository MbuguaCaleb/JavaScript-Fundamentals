//More and more libraries are now using promises
//eg Mongose for nodeJS and Axios, fetch-api

const posts = [
  {
    title: "Post One",
    body: "This is post One"
  },
  {
    title: "Post Two",
    body: "This is post Two"
  }
];

function getPosts() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

/*
//resolve (when you call something successfully)
//when error you call reject
function createPost(post) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = true;

      if (!error) {
        resolve();
      } else {
        reject("Error:Something went wrong");
      }
    }, 2000);
  });
}

//getPosts();


//i can use the dot then syntax since i am returning back a promise

//calling create post
createPost({
  title: "Post Three",
  body: "This is post three"
})
  .then(getPosts)
  .catch(err => console.log(err));

*/

//Alternative two for the promise
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error:Something went wrong");
      }
    }, 2000);
  });
}

/*
//Async /Await
//It awaits for an asynchronous process or action to Complete

async function init() {
  await createPost({
    title: "Post Three",
    body: "This is post three"
  });

  getPosts();
}

init();


*/
//Async /Await with fetch

async function fetchUsers() {
  //this URL returns a promise
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
}

fetchUsers();

/*
//promise all
//returns the response based on the time of the longest promise

const promise1 = Promise.resolve("Hello World!");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

//returns a promise
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
  res.json()
);

//takes in an array of promises

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);


*/

//Async Await/
//ES7
