const postButton = document.getElementById("submit");

let divID = 1;

const postsFrag = document.createDocumentFragment();

const allPosts = [];
// const allPosts = Array.from(document.getElementsByClassName("post")).map(
//   (div) => ({
//     element: div,
//     votes: parseInt(div.getAttribute("data-votes"), 10),
//   })
// );

const addPost = () => {
  const postObject = {
    person: document.getElementById("name").value,
    message: document.getElementById("message").value,
    ID: divID.toString(),
    votes: 0,
  };
  // parseInt(newPost.getAttribute("data-votes"), 10)

  const person = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const postsDiv = document.getElementsByClassName("posts")[0];
  const postTime = Date.now();

  const postOwner = document.createElement("p", postObject.person);
  postOwner.style.fontWeight = "500";
  postOwner.innerHTML = person;

  const postMessage = document.createElement("p");
  postMessage.innerHTML = message;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "btn btn-dark";
  deleteButton.style.marginRight = "5px";

  const voteTalley = document.createElement("span", 0);
  voteTalley.innerHTML = postObject.votes;

  const upVote = document.createElement("button");
  upVote.innerHTML = "Up Vote";
  upVote.className = "btn btn-success";
  upVote.dataDivID = divID;
  upVote.style.margin = "5px";
  upVote.addEventListener("click", () => {
    postObject.votes++;
    voteTalley.innerHTML = postObject.votes;
  });

  const downVote = document.createElement("button");
  downVote.innerHTML = "Down Vote";
  downVote.className = "btn btn-danger";
  downVote.style.margin = "5px";
  downVote.addEventListener("click", () => {
    postObject.votes--;
    voteTalley.innerHTML = postObject.votes;
  });

  const hr = document.createElement("hr");

  const newPost = document.createElement("div");
  newPost.style.margin = "20px";
  newPost.setAttribute("class", "post");
  newPost.setAttribute("data-votes", postObject.votes);
  newPost.setAttribute("data-divID", divID);

  newPost.appendChild(postMessage);
  newPost.appendChild(postOwner);
  newPost.appendChild(deleteButton);
  newPost.appendChild(upVote);
  newPost.appendChild(downVote);
  newPost.appendChild(voteTalley);
  newPost.appendChild(hr);

  deleteButton.addEventListener("click", function () {
    postsDiv.removeChild(newPost);
  });

  postsDiv.appendChild(newPost);

  allPosts.push(postObject);

  divID += 1;
};

postButton.addEventListener("click", addPost);
