import React from "react";
import Container from "@/app/components/Container/Container.jsx";
import Header from "@/app/components/Header/Header.jsx";

import { fetchUserId } from "@/app/apiServer/apiUsersPosts.js";

const User = async ({ params }) => {
  const user = await fetchUserId(params.id);
  console.log(user);

  return (
    <>
      <Header />
      <Container>
        <div>{user.name}</div>
      </Container>
    </>
  );
};

export default User;
