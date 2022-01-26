import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {
	//const categories = ["One Punch", "Samurai X", "Dragon Ball"];

	const [categories, setCategories] = useState(["One Punch"]);

	/*
	const handleAdd = () => {
		return setCategories([...categories, "HunterXHunter"]);
	};
  */

	return (
		<>
			<h2>GiftExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
