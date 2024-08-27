// src/services/api.ts
import { Blog } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://a2sv-backend.onrender.com/api' }),
  endpoints: (builder) => ({
    getBlogs: builder.query<Blog[], void>({
      query: () => '/blogs',
    }),
    getBlogById: builder.query<Blog, string>({
      query: (id) => `/blogs/${id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogByIdQuery } = api;
