fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((data) => showCommentsData(data));

function showCommentsData(comments) {
  comments.map((comment) => {
    const postId = document.createElement("h5");
    const commentId = document.createElement("p");
    const commentBody = document.createElement("p");
    const userEmail = document.createElement("p");
    const userName = document.createElement("h4");
    commentId.append(comment.id);
    userName.append(comment.name);
    userEmail.append(comment.email);
    commentBody.append(comment.body);
    postId.append(comment.postId);
    document.body.append(postId);
    document.body.append(commentId);
    document.body.append(userName);
    document.body.append(userEmail);
    document.body.append(commentBody);
  });
}
