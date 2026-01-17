import express from "express";
import {z} from "zod";



const app = express();
const userProfileSchema = z.object({
    name : z.string().min(1, {message:"Name cannot be empty"}),
    email : z.string().email({message :"Invalid Email formate"}),
    age: z.number().min(18, {message: "You must be at least 18 years old"}).optional(),
});


export type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
    const {success} = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body; // Assigned a type to updateBody

    if(!success){
        res.status(411).json({});
        return
    }

    //Update database here
    res.json({
        message :"User Updated"
    })
});