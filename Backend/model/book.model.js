import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    category: String,
    title: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;