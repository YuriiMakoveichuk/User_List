import React from "react";
import Link from "next/link.js";

import Container from "@/app/components/Container/Container.jsx";

import { fetchUserId } from "@/app/apiServer/apiUsersPosts.js";

import css from "./userId.module.css";

const User = async ({ params }) => {
  const { id } = params;
  const user = await fetchUserId(id);

  return (
    <>
      <Container>
        <div className={css.box}>
          <Link className={css.link} href={"/users"}>
            Go back
          </Link>
          <ul className={css.list}>
            <li className={css.item}>
              <p className={css.text}>
                <span>Name&nbsp;:</span>
                {user.name}
              </p>
            </li>
            <li className={css.item}>
              <p className={css.text}>
                <span>Username&nbsp;:</span>
                {user.username}
              </p>
            </li>
            <li className={css.item}>
              <p className={css.text}>
                <span>Email&nbsp;:</span>
                {user.email}
              </p>
            </li>
            <li className={css.item}>
              <p className={css.text}>
                <span>Phone&nbsp;:</span>
                {user.phone.split(" ")[0]}
              </p>
            </li>
            <li className={css.item}>
              <p className={css.text}>
                <span>City&nbsp;:</span>
                {user.address.city}
              </p>
            </li>
            <li className={css.item}>
              <p className={css.text}>
                <span>Company&nbsp;:</span>
                {user.company.name}
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default User;
