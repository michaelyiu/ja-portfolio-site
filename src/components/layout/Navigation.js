import React, { useState } from 'react'
import Navbar from "./Navbar";

const Navigation = () => {
	const [navStatus, setNav] = useState(false);

	return (
		<React.Fragment>
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
			</header>
		</React.Fragment >
	)
}

export default Navigation;