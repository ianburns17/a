import {addSignup } from "../models/subscriberModel.js";

export const postSignup  =(req, res) => {
    const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).send("Name and email are required.");
        }
    
        const newSignup = addSignup(name, email)
        res.render("thankyou", { title: "Thank You", ...newSignup });
    };
    
    