import React, { useState } from 'react'
import Navbar from "./Navbar";

const Landing = () => {
	const [navStatus, setNav] = useState(false);

	return (
		<React.Fragment>
			{/* <div id="mobileNav" style={{ display: navStatus ? "block" : "none" }}> */}
			<div id="mobileNav" className={navStatus ? "menuOpen" : null}>
				<div className="wrapper">
					<Navbar />

				</div>
			</div>
			<div id="mobileMenuLink" onClick={() => {
				setNav(!navStatus)
			}}>
				<a>Menu</a>
			</div>
			<header id="header">
				<div id="desktopNav">
					<Navbar />
				</div>
				{/* <div className="page-divider"></div> */}
			</header>
		</React.Fragment >
	)
}

export default Landing;