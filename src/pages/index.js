import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage
				alt="Redbull RB16b formula 1 car by Redbull formula 1 team"
				src="../images/wp9202386-rb16b-wallpapers.jpg"
			/>
		</Layout>
	)
}

export const Head = () => <Seo title={"Home Page"} />

export default IndexPage