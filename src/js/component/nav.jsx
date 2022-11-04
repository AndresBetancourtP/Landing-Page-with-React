import React from "react";

//create your first component
const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand ms-5" href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0 ms-auto me-5">
						<li class="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
