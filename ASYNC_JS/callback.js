/*

Promises give you a more elegant way to handle asynchronous data.

ASYNC AWAIT WAS INTRODUCED IN ES7

*/

//array

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

function createPost(post, callback) {
  setTimeout(() => {
    //pushing the created post into the array
    posts.push(post);
    callback();
  }, 1000);
}

//getPosts();

//calling create post with callback now passed

createPost(
  {
    title: "Post Three",
    body: "This is post three"
  },
  getPosts
);
