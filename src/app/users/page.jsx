import React from "react";
import Link from "next/link.js";

import Header from "../components/Header/Header.jsx";
import Container from "../components/Container/Container.jsx";

import { fetchUsers } from "../apiServer/apiUsersPosts.js";

import css from "./users.module.css";

const UsersPage = async () => {
  const users = await fetchUsers();
  console.log(users);

  return (
    <>
      <Header />
      <Container>
        <div className={css.list}>
          {users.map((user) => (
            <div key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default UsersPage;
