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

createPost({ title: 'Post three', body: 'This is post three' }).then(getPosts);
