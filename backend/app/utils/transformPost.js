const { CommentController } = require("../http/controllers/comment.controller");

async function transformPost(post, user) {
  post.likesCount = post.likes.length;
  post.isLiked = false;
  post.isBookmarked = false;

  // Only fetch comments if not already populated
  if (!post.comments || post.comments.length === 0) {
    const acceptedCommnets = await CommentController.findAcceptedComments(
      post._id
    );
    post.comments = acceptedCommnets;
  } else {
    // Filter comments to only include accepted ones (status = 2)
    post.comments = post.comments.filter((comment) => comment.status === 2);
  }

  if (post.author?.avatar) {
    post.author.avatarUrl = `${process.env.SERVER_URL}/${post.author.avatar}`;
  }

  if (post.related.length) {
    post.related = post.related.map((item) => {
      return {
        ...item,
        coverImageUrl: `${process.env.SERVER_URL}/${item.coverImage}`,
        author: {
          ...item.author,
          avatarUrl: `${process.env.SERVER_URL}/${item.author.avatar}`,
        },
      };
    });
  }

  post.commentsCount =
    post.comments.length +
    post.comments.reduce((a, c) => a + (c.answers?.length || 0), 0);

  // Add avatarUrl to comments and answers
  post.comments = post.comments.map((comment) => {
    if (comment.user?.avatar) {
      comment.user.avatarUrl = `${process.env.SERVER_URL}/${comment.user.avatar}`;
    }
    if (comment.answers && Array.isArray(comment.answers)) {
      comment.answers = comment.answers.map((answer) => {
        if (answer.user?.avatar) {
          answer.user.avatarUrl = `${process.env.SERVER_URL}/${answer.user.avatar}`;
        }
        return answer;
      });
    }
    return comment;
  });

  if (!user) {
    post.isLiked = false;
    post.isBookmarked = false;

    delete post.likes;
    delete post.bookmarks;
    return post;
  }
  if (post.likes.includes(user._id.toString())) {
    post.isLiked = true;
  }
  if (post.bookmarks.includes(user._id.toString())) {
    post.isBookmarked = true;
  }

  delete post.bookmarks;
  delete post.likes;
  return post;
}

module.exports = {
  transformPost,
};
