import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login_form } from "../component/login_form";
import { Redirect } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mx-auto text-center">
			<h1 className="text-warning">Welcome to Our Web !</h1>

			{store.token ? (
				<Redirect to={"/dashboard"} />
			) : (
				<div>
					<Login_form />
				</div>
			)}
		</div>
	);
};
