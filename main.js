const tweeter = Tweeter()
const renderer = Renderer()
let post = tweeter.addPost
let comment = tweeter.addComment
let removePost = tweeter.removePost
let removeComment = tweeter.removeComment

renderer.renderPosts(tweeter.getPosts())

