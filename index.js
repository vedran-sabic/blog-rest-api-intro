fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    let html = "";
    for (let post of postsArr) {
      html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `;
    }
    document.getElementById("blog-list").innerHTML = html;
  });

document.getElementById("new-post").addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = document.getElementById("post-title").value;
  const postBody = document.getElementById("post-body").value;
  const data = {
    title: postTitle,
    body: postBody,
  };
  /**
   * Challenge: Send this off to the server!
   *
   * 1. BaseURL: https://apis.scrimba.com/jsonplaceholder/
   * 2. Endpoint: /posts
   * 3. method: ???
   * 4. Request body: ??? (Remember to turn it into JSON)
   * 5. Headers: ??? (Check the JSON Placeholder API docs or past casts for help)
   */

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
