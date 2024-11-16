const postButton = document.getElementById("submit");

const posts = [];

const addPost = () => {
  const person = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const postsDiv = document.getElementsByClassName("posts")[0];
  const postTime = Date.now();

  const postOwner = document.createElement("p");
  postOwner.style.fontWeight = "500";
  postOwner.innerHTML = person;

  const postMessage = document.createElement("p");
  postMessage.innerHTML = message;

  const upVote = document.createElement("button");
  upVote.innerHTML = "This is awesome";
  upVote.className = "btn btn-success";
  upVote.style.marginRight = "5px";

  const downVote = document.createElement("button");
  downVote.innerHTML = "This is lame";
  downVote.className = "btn btn-danger";
  downVote.style.margin = "5px";

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "btn btn-dark";
  deleteButton.style.margin = "5px";

  const newPost = document.createElement("div");
  newPost.style.margin = "20px";
  newPost.setAttribute("class", "post");
  newPost.setAttribute("data-votes", 0);

  // const voteUp = function()

  newPost.appendChild(postMessage);
  newPost.appendChild(postOwner);
  newPost.appendChild(upVote);
  newPost.appendChild(downVote);
  newPost.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    postsDiv.removeChild(newPost);
  });

  postsDiv.appendChild(newPost);
};

postButton.addEventListener("click", addPost);
