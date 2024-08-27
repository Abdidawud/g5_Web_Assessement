"use client";
import { useGetBlogByIdQuery } from "@/service/api";
import React from "react";
import RelatedBlogCard from "../components/Related-cards/RelatedCards";

const Fetch = ({ id }: { id: string }) => {
  const { data: blog } = useGetBlogByIdQuery(id);
  console.log(blog);
  return (
    <div className="p-4">
      <div className="mb-8 text-center">
        <h1 className="text-center text-3xl  mb-2">
          {blog?.title ?? "Title Not Available"}
        </h1>
        <h5 className="text-slate-300 ">PROGRAMMING TECH | 6 MIN READ</h5>
      </div>
      <div className="flex justify-center mb-8">
        <img
          src={blog?.image ?? "/default-image.jpg"}
          alt={blog?.title ?? "Default Alt Text"}
          className=" pb-10"
        />
      </div>
      <div className="  items-center mb-8 justify-center">
        <div className="flex justify-center">
          <img
            src={blog?.author?.image ?? "/default-avatar.jpg"}
            alt={blog?.author?.name ?? "Author"}
            className="w-16 h-16 rounded-full mr-4"
          />
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">
            {blog?.author?.name ?? "Author Name"}
          </p>
          <p className="text-sm text-gray-500">
            {blog?.author?.role ?? "Author Role"}
          </p>
        </div>
      </div>
      <div className="prose px-60">
        {blog?.description ?? "Blog content not available."}
      </div>
      <div className="grid grid-cols-4 gap-4 items-center">
        <RelatedBlogCard />
        <RelatedBlogCard />
        <RelatedBlogCard />
      </div>
    </div>
  );
};

export default Fetch;
