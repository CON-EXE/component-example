function Footer(props) {
  return(
    <footer>
      <div className="container flex">
        <h2>Intro to React</h2>
        <div>
          <nav>
            <ul className="flex">
              {props.navLinks.map(navLink => (
                <li key={navLink.index}>
                  <a href="navLink.url">{navLink.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p>&copy; Connor Hall 2025</p>
      </div>
    </footer>
  )
}

export default Footer;