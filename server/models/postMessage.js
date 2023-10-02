import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	title: String,
	short_description: String,
	description: String,
	name: String,
	creator: String,
	tags: [String],
	selectedFile: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const postMessage = mongoose.model("PostMessage", postSchema);

export default postMessage;
