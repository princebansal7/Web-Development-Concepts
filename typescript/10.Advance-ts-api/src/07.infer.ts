import { z } from "zod";
import express from "express";

// Example-1:

const stringZodSchema = z.string(); // (at Run time)
type StringZodType = z.infer<typeof stringZodSchema>; // A have type 'string' (at Compile time)

// => zod lets you infer a type given a run time variable

// Example-2:

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email format" }),
    age: z
        .number()
        .min(18, { message: "You must be at least 18 years old" })
        .optional(),
});

// Re-defining the schema
// type FinalUserSchema = {
//     name: string;
//     email: string;
//     age?: number;
// };

// Instead we can infer the schema type which we already defined using zod
// This becomes important when we import this type in frontend - in monorepos
type FinalUserSchema = z.infer<typeof userProfileSchema>; // using infer to extract schema type

app.put("/update", (req, res) => {
    const result = userProfileSchema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({ error: result.error });
        return;
    }

    // Type of updateBody is inferred from userProfileSchema
    const updateBody: FinalUserSchema = result.data;

    // update database here
    res.json({
        message: "User updated",
        updateBody,
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
