import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mx-auto text-center">
			{store.token ? <h1 className="text-warning">Welcome to the private dashboard !</h1> : <Redirect to={"/"} />}
		</div>
	);

	return (
		<div className="mx-auto text-center">
			<h1 className="text-warning">Welcome to the private Dashboard!</h1>
		</div>
	);
};
