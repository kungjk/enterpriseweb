import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import dateInSwedish from "../Utils/dateInSwedish"
import truncateText from "../Utils/truncateText"

import "./posts.scss"

export default function Posts({ data }) {
	const allMdx = usePostQuery()
	if (!allMdx)
		return (
			<h2 style={{ textAlign: "center", marginTop: "50px", color: "gray" }}>
				No posts found.
			</h2>
		)
	return (
		<>
			<section className="Posts">
				<h2 className="Posts__banner">Nyheter</h2>
				{allMdx.edges.map((post, i) => (
					<div className="Post" key={i}>
						<Link to={`/nyheter/Artikel/${post.node.slug}`} className="Post__metainfo">
							<h3 className="Post__title">{post.node.frontmatter.title}</h3>
							<h5 className="Post__date">
								{dateInSwedish(post.node.frontmatter.date)}
							</h5>
						</Link>
						<div className="Post__description">
							{post.node.frontmatter.description.length > 1
								? truncateText(post.node.frontmatter.description, 265)
								: truncateText(post.node.rawBody, 265)}
						</div>
						<Link to={`/nyheter/Artikel/${post.node.slug}`} className="Post__readmore">
							Läs mer
						</Link>
					</div>
				))}
			</section>
		</>
	)
}

export const usePostQuery = () => {
	// Fetch latest posts
	const { allMdx } = useStaticQuery(
		graphql`
			query FetchRecentPosts {
				allMdx(
					sort: { order: DESC, fields: frontmatter___date }
					filter: { fileAbsolutePath: { regex: "/posts/" } }
				) {
					edges {
						node {
							frontmatter {
								date
								description
								title
							}
							slug
							rawBody
						}
					}
				}
			}
		`
	)
	return allMdx
}
