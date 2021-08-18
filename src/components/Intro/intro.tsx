import React from "react"

import "./intro.scss"
import Image from "../Utils/image"

export default function Intro(props) {
	if (!props) return <div>Props are empty</div>

	return (
		<section className="Intro">
			{/* Set title and desc in gatsby-config.js under "siteMetadata" */}
			<h1 className="Intro__header">
				{!props.siteTitle || props.siteTitle === ""
					? `Undefined`
					: props.siteTitle}
			</h1>
			<Image fileName="inspire.jpg" className="small-image" alt="Fin Bild" />
			<h4 className="Intro__subheader">
				{!props.siteDescription || props.siteDescription === ""
					? `Undefined`
					: props.siteDescription}
			</h4>
		
		</section>
	)
}
