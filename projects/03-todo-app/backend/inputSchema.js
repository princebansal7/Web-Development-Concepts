import zod from "zod";

export const createTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
});
export const updateTodoSchema = zod.object({
    id: zod.string(),
});
