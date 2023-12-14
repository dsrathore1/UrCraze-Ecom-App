import mongoose from "mongoose";

const CD_Schema = mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, unique: true, required: true },
    number: Number,
});

const CD_Model = mongoose.models.contactDetail || mongoose.model(CD_Schema, "contactDetail");

export default CD_Model;