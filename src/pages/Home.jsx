import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';

export const Home = () => {
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <Post
              id={1}
              title="Тест Фронта"
              imageUrl="https://res.cloudinary.com/ddshgdehu/image/upload/c_scale,h_328/v1680699491/123123_j69puu.jpg"
              user={{
                avatarUrl:
                  'https://res.cloudinary.com/ddshgdehu/image/upload/v1680699772/-mzYwM2dRI8_ysewbb.jpg',
                fullName: 'Тимофей Ковжун',
              }}
              createdAt={'03 апреля 2023 г.'}
              viewsCount={150}
              commentsCount={3}
              tags={['ТРиТПО', 'Тест', 'ТРиТПО']}
              isEditable
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={['Tritpo', 'Aksis', 'AVP']} isLoading={false} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Тимофей Ковжун',
                  avatarUrl: 'https://res.cloudinary.com/ddshgdehu/image/upload/v1680699772/-mzYwM2dRI8_ysewbb.jpg',
                },
                text: 'Это крутой блог',
              },
              {
                user: {
                  fullName: 'Игорь Шаровский',
                  avatarUrl: 'https://res.cloudinary.com/ddshgdehu/image/upload/v1680700103/162144132918582960_zghzwt.jpg',
                },
                text: 'Всё четко!!!',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};
