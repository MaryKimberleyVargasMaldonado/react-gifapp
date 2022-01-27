import React, { useState } from "react";
import { ReactDOM } from "react";
import PropTypes from "prop-types";

export const AddCategory = (props) => {
	const [inputValue, setInputValue] = useState("Search a category:");

	// H A N D L E   I N P U T   C H A N G E
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		console.log("HandleInputChange llamado.");
	};

	//colocar el event a un form
	// H A N D L E   S U B M I T
	const handleSubmit = (e) => {
		e.preventDefault(); //prevenir comportamiento por defecto del formulario.
		console.log("Submit done", inputValue);

		if (inputValue.trim().length > 2) {
			props.setCategories((cate) => [inputValue, ...cate]);
			setInputValue("");
		}
	};

	return (
		//FRAGMENT
		<form onSubmit={handleSubmit}>
			<p>{inputValue}</p>
			<h2>{inputValue}</h2>
			<input type="text" value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

// P R O P E R T I E S
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
