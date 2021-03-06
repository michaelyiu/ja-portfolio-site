import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		// <nav className="navbar">
		// 	<div className="container">
		// 		<div id="mobile-nav" >
		// 			<div className="wrapper">
		<nav className="main-nav">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/works">Works</Link>
				</li>
				<li>
					<Link to="about">About</Link>
				</li>
				<li>
					<Link to="contact">Contact</Link>
				</li>
			</ul>
		</nav>
		// 			</div>
		// 		</div>
		// 	</div>
		// </nav>


		// <li className="nav-item flex-center-vertically">
		// 	<Link className="nav-link" to="/">
		// 		Home
		//     			</Link>
		// </li>
		// <li className="nav-item flex-center-vertically">
		// 	<Link className="nav-link" to="/">
		// 		Portfolio
		//     			</Link>
		// </li>
		// <li className="nav-item flex-center-vertically">
		// 	<Link className="nav-link" to="/">
		// 		About
		//     			</Link>
		// </li>
		// <li className="nav-item flex-center-vertically">
		// 	<Link className="nav-link" to="/">
		// 		Contact
		//     			</Link>
		// </li>
	)
}

export default Navbar;