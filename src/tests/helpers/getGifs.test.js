import { getGifs } from "../../helpers/getGifs";

import { shallow } from "enzyme";
import React from "react";
import "@testing-library/jest-dom";

describe("Prueba en getGifs.js", () => {
	// P R I M E R   T E S T
	test("1. Debe traer 10 elementos: ", async () => {
		const gifs = await getGifs("Michael Jackson");
		expect(gifs.length).toBe(10);
	});

	// S E G U N D O  T E S T
	test("2. Debe traer 0 elementos: ", async () => {
		const gifs = await getGifs("");
		expect(gifs.length).toBe(0);
	});
});
