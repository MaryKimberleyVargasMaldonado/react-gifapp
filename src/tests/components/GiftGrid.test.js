import { GifGrid } from "../../components/GiftGrid";
import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "../../components/GifGridItem";
jest.mock("../../hooks/useFetchGifs");

describe("Prueba en GiftGrid.js", () => {
	const category = "Husky";

	// P R I M E R   T E S T
	test("1. Snapshot :", () => {
		useFetchGifs.mockReturnValue({ data: [], loading: true });
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	// S E G U N D O   T E S T
	test("2. Mostrar items cuando cargan imágenes en useFetchGifs: ", () => {
		const gifs = [
			{
				id: "HUMB",
				url: "https://localhost/cualquier.jpg",
				title: "cualquier",
			},
		];
		useFetchGifs.mockReturnValue({ data: gifs, loading: false });

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("p").exists()).toBe(false);
		expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
	});

	// T E R C E R   T E S T
	test("3. Exist: ", () => {});
});
