import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Posts from "../../components/Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

function Home() {
	const dispatch = useDispatch();
	const [currentId, setCurrentId] = useState(null);

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<div>
			<Navbar />
			<Form currentId={currentId} setCurrentId={setCurrentId} />
			<Posts setCurrentId={setCurrentId} />
		</div>
	);
}

export default Home;
