import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1 style={{ textAlign: "center" }}>404 NOT FOUND</h1>
		<p style={{ textAlign: "center" }}>
			Sidan kunde inte hittas. <br />
			(Den kan ha blivit borttagen eller flyttad..)
		</p>
	</Layout>
)

export default NotFoundPage
