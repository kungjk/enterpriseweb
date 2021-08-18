import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function About(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="siteTitle" />
			<section className="About">
				<h1>Om oss</h1>
				<p>
					
Enterprise Magazine är ett magasin som ges ut 6 gånger per år. Magasinet ligger i väntrummen på 3 000 större företag och delas även ut digitalt via Facebook till ca 300 000 människor och företag. Vi når per utgåva ut med våra artiklar ut till mellan 3–4 miljoner människor i hela Sverige samt på övriga sociala medier med hjälp av hashtags. Vi arbetar för att tillgodose företags och entreprenörers intresse av att synas.

Magasinet ges ut av RRRSS Förlag. Förlaget är i dag verksamma i Sverige, Norge och Danmark.
					<br />
					
				</p>
			</section>
		</Layout>
	)
}
