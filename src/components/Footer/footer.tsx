import React from "react"
import { Link } from "gatsby"
// import SocialLinks from "../SocialLinks/sociallinks"

import "./footer.scss"

const Footer = props => (
	<footer className={`Footer ${props.className}`}>
		<Link to="/" className="Footer__title">
			{props.siteTitle}
		</Link>
		{/* <SocialLinks /> */}
		<span className="Footer__legal">
			© {new Date().getFullYear()} {props.siteAuthor}. 
		</span>

		{/* I'd appreciate it if you keep the credits :) */}
		<a
			href="https://www.infinity-it.se/"
			target="_blank"
			rel="noopener noreferrer"
			className="Footer__citation"
		>
			Utvecklat av Infinity-IT
		</a>
	</footer>
)

export default Footer
