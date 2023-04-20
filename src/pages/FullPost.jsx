import React from "react";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  return (
    <>
      <Post
        id={1}
        title="Тестовый фронт"
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={{
          avatarUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
          fullName: "Тимофей Ковжун",
        }}
        createdAt={"04 апреля 2023 г."}
        viewsCount={150}
        commentsCount={3}
        tags={["Пост", "Лента постов", "!"]}
        isFullPost
      >
        <p>
          Тут будут отображаться новые статьи
        </p>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Игорь шаровский",
              avatarUrl: "https://res.cloudinary.com/ddshgdehu/image/upload/v1680700103/162144132918582960_zghzwt.jpg",
            },
            text: "Это тестовый комментарий 555555",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "Когда новый пост",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
