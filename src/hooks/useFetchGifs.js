import { useEffect, useState } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	// U S E   E F F E C T  con lista de dependencias
	useEffect(() => {
		return getGifs(category).then((imgs) => {
			setState({ data: imgs, loading: false });
		});
	}, [category]); // para que sólo se dispare una única vez

	return state; // {data:[], loading:true}
};
/*
	setTimeout(() => {
		setState({
			data: [1, 2, 3, 4, 5, 6, 7],
			loading: false,
		});
	});
*/
