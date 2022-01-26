import React from "react";
import { useState, useEffect, Fragment } from "react/cjs/react.development";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
	// U S E   F E T C H   G I F T S
	const { data: images, loading } = useFetchGifs(category);

	// I M A G E S
	/*
	const [images, setImages] = useState([]);


*/
	//getGifs();
	return (
		<Fragment>
			<h3 className="animate__animated animate__fadeIn">{category}</h3>
			{loading && <p className="animate__animate animate__flash">Loading...</p>}
			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</Fragment>
	);
};

/*
			<ol>
				{images.map((img) => (
					<li key={img.id}>{img.title}</li>
				))}
			</ol>*/
