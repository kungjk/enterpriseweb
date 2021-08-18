import { Link } from "gatsby"
import React from "react"
import { slide as Menu } from "react-burger-menu"
// import SocialLinks from "../SocialLinks/sociallinks"

import "./header.scss"

const Header = props => (
	<header className={`Header ${props.className}`}>
		<Link to="/" className="Header__logo">
			<h1 className="Header__logo__text">
				{!props.siteTitle || props.siteTitle === ""
					? `Undefined`
					: props.siteTitle}
			</h1>
		</Link>
		<Menu right className="Header__menu">
			<Link to="/" className="Header__menu__item menuTitle">
				{!props.siteTitle || props.siteTitle === ""
					? `Undefined`
					: props.siteTitle}
			</Link>
			{/* <SocialLinks className="Header__SocialLinks" /> */}
			<Link to="/om-oss" className="Header__menu__item">
				Om Oss
			</Link>
			<Link to="/nyheter" className="Header__menu__item">
				Nyheter
			</Link>
			<Link to="/ledaren" className="Header__menu__item">
				Ledaren
			</Link>
			{/* <Link to="/example-page" className="Header__menu__item">
				Example Page
			</Link> */}
		</Menu>
	</header>
)

export default Header
