"use client";
import React from "react";
import Card from "./card";
import { useGetBlogsQuery } from "@/service/api";

const CardInformation = () => {
  const { data: blogs, error, isLoading } = useGetBlogsQuery();
  console.log("this is the data", blogs);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="">
      {blogs?.map((blog) => (
        <Card
          key={blog._id}
          profileImage={blog.author?.image}
          name={blog.author?.name}
          date={blog.updatedAt}
          dept={blog.author?.role}
          title={blog.title}
          body={blog.description}
          image={blog.image}
          id={blog._id}
        />
      ))}
    </div>
  );
};

export default CardInformation;
