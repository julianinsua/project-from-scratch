import React from "react";
import classes from "./PizzaImage.module.css";
import PizzaImage from "../../assets/Pizza.jpg";

export const PizzaImage = () => {
	return (
		<div classname={classes.PizzaImage}>
			<img src={PizzaImage} className={classes.PizzaImg} />
		</div>
	);
};
