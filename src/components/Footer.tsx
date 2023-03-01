import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content-wrapper">
        © {new Date().getFullYear()}, Sviluppato con
        {` `}
        <a className="footer__link" href="https://www.gatsbyjs.com">
          Gatsby
        </a>{" "}
        da {` `}
        <a
          className="footer__link"
          href="https://davidescarioniscorner.gatsbyjs.io/"
        >
          Davide Scarioni
        </a>
      </div>
      {/* <ul>
        <li>

        </li>
      </ul> */}
    </footer>
  )
}

export default Footer
