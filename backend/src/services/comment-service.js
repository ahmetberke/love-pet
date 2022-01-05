import commentRepo from "../repositories/comment-repository.js";

const commentService = {
    findComment: async (commentId) => {
        return await commentRepo.findComment(commentId);
    },

    createComment: async (comment) => {
        return await commentRepo.createComment(comment);
    },

    deleteComment: async (comment) => {
        return await commentRepo.deleteComment(comment);
    },

    updateComment: async (comment) => {
        return await commentRepo.updateComment(comment);
    }
};

export default commentService;
