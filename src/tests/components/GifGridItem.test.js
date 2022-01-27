import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";
import React from "react";
import "@testing-library/jest-dom";

// Inicio del test
describe("Prueba en GifGridItem.", () => {
	/*	beforeEach(() => {
		wrapper = shallow(<GifGridItem />);
	});*/

	const title = "Un titulo";
	const url = "https://localhost/algo.jpg";

	const wrapper = shallow(<GifGridItem url={url} title={title} />);

	// P R I M E R   T E S T
	test("1. Title y URL obligatorios: ", () => {
		expect(wrapper).toMatchSnapshot();
	}); // p

	//  S E G U N D O  T E S T
	test("2. Title debe tener un párrafo: ", () => {
		const p = wrapper.find("p").text().trim();
		//expect(p.text().trim()).toBe(title);
		expect(p).toBe(title);
	}); // s

	// T E R C E R   T E S T
	test("3. Debe tener una imagen igual al props: ", () => {
		const img = wrapper.find("img");
		expect(img.prop("src")).toBe(url);
		expect(img.prop("alt")).toBe(title);
	}); // tt
}); // describe
