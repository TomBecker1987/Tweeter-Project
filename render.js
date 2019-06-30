    const Renderer = function () {
        let renderPosts = function (posts){
       
            $("#posts").empty()
            for (let i in posts) {
                i = parseInt(i)
                let pId = posts[i].id
                $("#posts").append(`<div class="post" data-id="${pId}"></div>`)
                $(document.querySelector(`.post[data-id="${pId}"]`)).append(`<div class="post-text" data-id="${pId}">${posts[i].text}</div><br>`)
                $(document.querySelector(`.post-text[data-id="${pId}"]`)).after(`<div class="comments" data-id="${pId}"></div>`)
                for (let y in posts[i].comments) {
                    y = parseInt(y)
                    $(document.querySelector(`.comments[data-id="${pId}"]`)).append(`<span class="delete-comment" data-id="${posts[i].comments[y].id}">X </span>`)
                    $(document.querySelector(`.delete-comment[data-id="${posts[i].comments[y].id}"]`)).on("click", function () {
                        let postId = pId
                        let commentId = posts[i].comments[y].id
                        removeComment(postId, commentId)
                    })
                    $(document.querySelector(`.comments[data-id="${pId}"]`)).append(`<span>${posts[i].comments[y].text}</span><br>`)
                }
                $(document.querySelector(`.post[data-id="${pId}"]`)).append(`<input type="text" placeholder="Got something to say?" data-id="${pId}">`)
                $(document.querySelector(`.post[data-id="${pId}"]`)).append(`<button type="button" data-id="${pId}">Comment</button><br><br>`)
                $(document.querySelector(`button[data-id="${pId}"]`)).on("click", function () {
                    let text = $(document.querySelector(`input[data-id="${pId}"]`)).val()
                    comment($(document.querySelector(`button[data-id="${pId}"]`)).data('id'),text)
                    renderer.renderPosts(tweeter.getPosts())
                })
                $(document.querySelector(`.post[data-id="${pId}"]`)).append(`<div class="delete" data-id="${pId}">Delete Post</div>`)
                $(document.querySelector(`.delete[data-id="${pId}"]`)).on("click", function () {
                    let id = $(this).data('id')
                    removePost(id)
                })
            }
            

            }
            return {renderPosts}
        }
        
    
    

