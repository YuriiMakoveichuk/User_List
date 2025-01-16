import React from "react";
import Link from "next/link.js";

import Container from "../components/Container/Container.jsx";

import { fetchUsers } from "../apiServer/apiUsersPosts.js";

import css from "./users.module.css";

const UsersPage = async () => {
  const users = await fetchUsers();

  return (
    <>
      <Container>
        <ul className={css.list}>
          {users.map((user) => (
            <li className={css.item} key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default UsersPage;
