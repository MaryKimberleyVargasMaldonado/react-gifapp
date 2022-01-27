import React from "react";
//import { GifGrid } from "./components/GiftGrid";
import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => {
	console.log({ title, url });
	return (
		<div className="card animate__animated animate__zoomInDown">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

// P R O P E R T I E S   -   P R O P T Y P E S
GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	//id: PropTypes.string.isRequired,
};
