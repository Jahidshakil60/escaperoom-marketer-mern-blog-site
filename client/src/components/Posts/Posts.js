import React from "react";
import "./styles.css";
import Image from "../../images/Batasia-loop-Darjeeling.jpg";

import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../actions/posts";

function Posts({ setCurrentId }) {
	const posts = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	console.log(posts);

	const handleEditPost = (id) => {
		setCurrentId(id);
		window.scrollTo(0, 0);
	};

	return (
		<div className="posts-container">
			{posts.map((post) => (
				<div className="post-wrapper" key={post._id}>
					<img src={post.selectedFile} alt="" className="post_img" />
					<p className="">{post.title}</p>
					<p className="">{post.tags.map((tag) => `#${tag} `)}</p>
					<p className="">{post.short_description.slice(0, 80) + "..."}</p>
					<div className="">
						<button className="post__delete" onClick={() => dispatch(deletePost(post._id))}>
							Delete
						</button>
						<button className="post__edit" onClick={() => handleEditPost(post._id)}>
							Edit
						</button>
					</div>
					{/* <div dangerouslySetInnerHTML={{ __html: post.description }} /> */}
				</div>
			))}
		</div>
	);
}

export default Posts;
