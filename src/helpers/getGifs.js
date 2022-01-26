import React from "react";
import { GifGrid } from "../components/GiftGrid";

export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=sVSVPu4u5ynazdwT8mfWb2l3lP13T6XZ`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});

	return gifs;
}; // FIN getGifs
