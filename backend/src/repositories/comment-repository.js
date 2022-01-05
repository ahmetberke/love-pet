import Comment from "../models/comment.js";

const commentRepo = {
    findComment: async (commentId) => {
        return await Comment.findByPk({
            where: {
                id: commentId
            }
        });
    },

    createComment: async (comment) => {
        return await Comment.create(comment);
    },

    deleteComment: async (comment) => {
        return await comment.destroy();
    },

    updateComment: async (comment) => {
        return await comment.save();
    }
};

export default commentRepo;
