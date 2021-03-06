import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons"

function Nav({ siteTitle }) {
  return (
    <nav>
      <Link to="/" id="nav-title">
        <FontAwesomeIcon icon={faUserAstronaut} size="3x" />
      </Link>
      <Link to="/blog" id="nav-blog">
        <h2>Blog</h2>
      </Link>
      <Link to="/me" id="nav-me">
        <h2>Me</h2>
      </Link>
    </nav>
  )
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
