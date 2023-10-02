import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import "./styles.css";
import { createPost, updatePost } from "../../actions/posts";

import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";

import { useDispatch, useSelector } from "react-redux";

function Form({ setCurrentId, currentId }) {
	const [postData, SetPostData] = useState({
		title: "",
		short_description: "",
		description: "",
		tags: "",
		selectedFile: "",
	});

	const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("profile"));

	useEffect(() => {
		if (post) SetPostData(post);
		console.log(post);
	}, [post]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currentId) {
			dispatch(updatePost(currentId, { ...postData }));
		} else {
			dispatch(createPost({ ...postData, name: user?.result?.name }));
		}

		console.log(postData);

		clear();
	};

	const clear = () => {
		setCurrentId(null);
		SetPostData({
			title: "",
			short_description: "",
			description: "",
			tags: "",
			selectedFile: "",
		});
	};

	return (
		<div className="form-container">
			<h1 className="form__heading">{`${currentId ? "Editing" : "Create"} a new post`}</h1>
			<form action="" className="form-main" onSubmit={handleSubmit}>
				<div className="item__short">
					<div className="form-item">
						<label htmlFor="">Title</label>
						<input
							type="text"
							name="title"
							placeholder=" Title here"
							value={postData.title}
							onChange={(e) => SetPostData((prev) => ({ ...prev, title: e.target.value }))}
						/>
					</div>
					<div className="form-item">
						<label htmlFor="">Short Description</label>
						<input
							type="text"
							name="short_description"
							placeholder="Write Short Description"
							value={postData.short_description}
							onChange={(e) => SetPostData((prev) => ({ ...prev, short_description: e.target.value }))}
						/>
					</div>
					<div className="form-item">
						<label htmlFor="">Tags</label>
						<input
							type="text"
							name="tags"
							placeholder=" Tags here"
							value={postData.tags}
							onChange={(e) => SetPostData((prev) => ({ ...prev, tags: e.target.value.split(",") }))}
							className="input_tags"
						/>
					</div>
				</div>
				<div className="form-item">
					<label htmlFor="">Description</label>
					<div>
						<EditorToolbar toolbarId={"t1"} />
						<ReactQuill
							theme="snow"
							value={postData.description}
							onChange={(value) => SetPostData((prev) => ({ ...prev, description: value }))}
							placeholder={"Write something awesome..."}
							modules={modules("t1")}
							formats={formats}
							className="editor_input"
						/>
					</div>
				</div>

				<div className="img-btn">
					<FileBase type="file" multiple={false} onDone={({ base64 }) => SetPostData({ ...postData, selectedFile: base64 })} />
					<button type="submit" className="btn__submit">
						{" "}
						{`${currentId ? "Update" : "Submit"}`}
					</button>
					{currentId && (
						<button type="submit" className="btn__clear" onClick={clear}>
							Clear
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default Form;
