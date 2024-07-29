const zod = require("zod");

const createTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
});
const updateTodoSchema = zod.object({
    id: zod.string(),
});

module.exports = {
    createTodoSchema,
    updateTodoSchema,
};
