const postButton = document.getElementById("submit");

postButton.addEventListener("click", function () {
  const person = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const postsDiv = document.getElementsByClassName("posts")[0];

  const postOwner = document.createElement("span");
  postOwner.style.fontWeight = "500";
  postOwner.innerHTML = person;
  const postMessage = document.createElement("p");
  postMessage.innerHTML = message;

  postsDiv.appendChild(postMessage);
  postsDiv.appendChild(postOwner);
});
