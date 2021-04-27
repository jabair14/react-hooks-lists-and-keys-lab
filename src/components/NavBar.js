import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linktags = links.map((link) => (
    <a key={link} href={"#"+ link}>
      {link}
    </a>

  ))

  return (
    <nav>{linktags}

    </nav>
    

  )
}

export default NavBar;
