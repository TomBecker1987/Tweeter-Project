const Tweeter = function () {
    let _posts = []
    let _postIdCounter = 0
    let _commentIdCounter = 0

    let getPosts = function () {
        return _posts
    }
    let addPost = function () {
        _postIdCounter++
        let post = {}
        post.id = `p${_postIdCounter}`
        post.text = $("#input").val()
        post.comments = []
        _posts.push(post)
        renderer.renderPosts(_posts)
    }
    let removePost = function (id) {
        for (let p in _posts) {
            if (_posts[p].id == id) {
                _posts.splice(p,1)
            }
        }
        renderer.renderPosts(tweeter.getPosts())
    }
    let addComment = function (postId,text) {
        for (let post of _posts) {
            if (post.id == postId) {
                post.comments.push({text:text,id:`c${(_commentIdCounter)+1}`})
            }
        }
        _commentIdCounter++
    }
  

    let removeComment = function (postId,commentId) {
        for (let post of _posts) {
            if (post.id == postId) {
                for (let i in post.comments) {
                    if (post.comments[i].id == commentId) {
                        post.comments.splice(i,1)
                    }
                }
            }
        }
        renderer.renderPosts(_posts)
    }
    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}


