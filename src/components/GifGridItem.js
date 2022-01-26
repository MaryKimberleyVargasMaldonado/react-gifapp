import React from "react";
//import { GifGrid } from "./components/GiftGrid";

export const GifGridItem = ({ id, title, url }) => {
	console.log({ id, title, url });
	return (
		<div className="card animate__animated animate__zoomInDown">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};
