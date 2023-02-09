import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="www.google.com">
          Navbar{" "}
          <span className="badge-pill badge-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
