function commentCard(comment) {
    return /* html */`
    <div class="card">
        <div class="card-body">
            <h5 class="card-comment-title">${comment.name}</h5>
            <h6 class="card-subtitle">${comment.email}</h6>
            <p class="card-text">${comment.body}</p>
        </div>
    </div>
    `
}