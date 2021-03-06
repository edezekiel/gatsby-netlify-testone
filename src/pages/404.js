import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

function NotFoundPage(props) {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h2>NOT FOUND</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
