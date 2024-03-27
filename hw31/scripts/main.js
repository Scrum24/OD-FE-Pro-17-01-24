const searchForm = document.getElementById("search-from");
searchForm.addEventListener("submit", addPost);

async function addPost(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const postId = form.elements["post-id"].value;

    const post = await getPost(postId);
    const postHTML = createPost(post);
    addPostToThePage(postHTML);
}

function getPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(post => post.json())
        .catch(err => console.error("GetPost error:", err));
}

function createPost(post) {
    return `<div class="post" data-post-id="${post.id}">
                <div class="close-btn">x</div>
                <div class="post__content">
                    <div class="post__number"><b>Post №:</b>${post.id}</div>
                    <div class="post__title"><b>Title:</b>${post.title}</div>
                    <div class="post__description"><b>Description:</b>${post.description}</div>
                    <div class="post__comments-btn">Comments</div>
                </div>
                <div class="post__comments"></div>
            </div>`;
}

function addPostToThePage(postHTML) {
    const posts = document.getElementById("posts");
    posts.insertAdjacentHTML("beforeend", postHTML);
}


const posts = document.getElementById("posts");
posts.addEventListener("click", addComments);

async function addComments(e) {
    const targetEl = e.target;
    if (targetEl.className === "post__comments-btn") {
        const postEl = targetEl.closest(".post");
        const postId = postEl.getAttribute("data-post-id");

        const comments = await getComments(postId);
        const commentsHTMLBlock = createCommentsHTMLBlock(comments);

        addCommentsHTMLBlock(postEl, commentsHTMLBlock);
        deactivateBtn(targetEl);
    }

    if (targetEl.className === "close-btn") {
        const postEl = targetEl.closest(".post");
        postEl.remove();
    }
}

function getComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(post => post.json())
        .catch(err => console.error("GetComments error:", err));
}

function createCommentsHTMLBlock(comments) {
    const commentsList = [];
    for (let comment of comments) {
        const newEl =
            `<div class="comment">
                <div class="comment__number"><b>Comment №:</b>${comment.id}</div>
                <div class="comment__title"><b>Comment title:</b>${comment.name}</div>
                <div class="comment__description"><b>Comment description:</b>${comment.body}</div>
             </div>`;
        commentsList.push(newEl);
    }

    const commentsHTML = commentsList.join("\n");
    return `<div class="post__comments">${commentsHTML}</div>`;
}

function addCommentsHTMLBlock(postEl, commentsHTMLBlock) {
    postEl.insertAdjacentHTML("beforeend", commentsHTMLBlock);
}

function deactivateBtn(btn) {
    const deactivatedClass = "isDeactivated";
    if (!btn.classList.contains(deactivatedClass)) {
        btn.classList.add(deactivatedClass);
    }
}