import React from "react";

import Container from "../components/Container/Container.jsx";

import { fetchPosts } from "../apiServer/apiUsersPosts.js";

import css from "./posts.module.css";

const PostsPage = async () => {
  const posts = await fetchPosts();

  return (
    <>
      <Container>
        <ol className={css.list}>
          {posts.map((post) => (
            <li className={css.item} key={post.id}>
              <p>{post.title}</p>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
};

export default PostsPage;
