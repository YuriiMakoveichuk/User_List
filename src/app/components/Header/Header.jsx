"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "../Container/Container";
import css from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Container>
        <nav className={css.navHeader}>
          <Link
            href="/users"
            className={clsx(css.link, pathname === "/users" && css.active)}
          >
            Users
          </Link>
          <Link
            href="/posts"
            className={clsx(css.link, pathname === "/posts" && css.active)}
          >
            Posts
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
