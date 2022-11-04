import React from "react";

//create your first component
const Jumbo = () => {
	return (
		<div className="container-fluid bg-light p-5 mt-4 mb-3 ms-0 me-0 " >
			<div className="row h-100">
				<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
				<p className=" text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
			</div>
				<a href="#" className="btn btn-primary">Call to action!</a>
		</div>

	);
};


export default Jumbo;
