import * as React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const headerTitle = (<Link className="header-link-home" to="/">
  <h1>{title}</h1>
</Link>)

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="header__content-wrapper">{headerTitle}</div>
      </header>
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
