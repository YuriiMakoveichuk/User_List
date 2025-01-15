import React from "react";
import Link from "next/link.js";

import Container from "../Container/Container.jsx";

import css from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <Container>
          <nav className={css.navHeader}>
            <Link className={css.link} href={"/users"}>
              Users
            </Link>
            <Link className={css.link} href={"/posts"}>
              Posts
            </Link>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
