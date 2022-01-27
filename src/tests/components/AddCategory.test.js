import { AddCategory } from "../../components/AddCategory";
import { shallow } from "enzyme";
import React from "react";
import "@testing-library/jest-dom";

describe("Pruebas en AddCategory.js", () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	// B E F O R E   E A C H
	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	// P R I M E R    T E S T
	test("1. <AddCategory /> mostrar correctamente: ", () => {
		expect(wrapper).toMatchSnapshot();
	});

	// S E G U N D O    T E S T
	test("2. La caja de texto debe cambiar: ", () => {
		const input = wrapper.find("input");
		const value = "Hola mundo";
		input.simulate("change", { target: { value } });
		expect(wrapper.find("p").text().trim()).toBe(value);
	});

	// T E R C E R   T E S T -  VÍDEO 95 PENDIENTE
	test("3. No debe postear la info con submit: ", () => {
		wrapper.find("form").simulate("submit", { preventDefault() {} });
		//expect(setCategories).not.toHaveBeenCalled();
	});

	// C U A R T O   T E S T
	test("4. Debe llamar el setCategories y limpiar la caja de texto: ", () => {
		//1. Simular el imput change.
		const value = "Husky";
		wrapper.find("input").simulate("change", { target: { value } });

		//2. Simular el submit.
		wrapper.find("form").simulate("submit", { preventDefault() {} });

		//3. setCategories been called.
		expect(setCategories).toHaveBeenCalled();
		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

		//4. Valor de imput vacio.
		expect(wrapper.find("input").prop("value")).toBe("");
	});
}); //desc
