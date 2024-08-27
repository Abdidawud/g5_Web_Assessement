import Link from "next/link";
import React from "react";

interface CardInformationProps {
  profileImage: string;
  name: string;
  dept: string;
  date: string;
  image: string;
  title: string;
  body: string;
  id: string;
}

const Card = ({
  profileImage,
  name,
  dept,
  date,
  image,
  title,
  body,
  id,
}: CardInformationProps) => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-4xl lg:max-w-5xl xl:max-w-6xl p-4 relative">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-100 rounded-t-lg"></div>

        <div className="flex flex-col justify-between p-6 leading-normal flex-1">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
              <img
                src={profileImage ? profileImage : "/profile.png"}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <Link href={`/blog/${id}`}>
              <div>
                <h3 className="font-montserrat text-[20px] font-semibold leading-[20px] text-center mb-2 ">
                  {name ? name : "Yididiya Kebede"}{" "}
                  <span className="text-gray-500 text-sm ml-1 mr-2">·</span>{" "}
                  <span className="text-gray-500 text-sm ">{date}</span>
                </h3>
                <p className="text-gray-400 text-sm">
                  {dept ? dept : "SOFTWARE ENGINEER"}
                </p>
              </div>
            </Link>
          </div>
          <h5 className="mb-4 text-3xl font-bold tracking-tight">{title}</h5>
          <p className="mb-4 font-normal text-gray-700">{body}</p>

          <div className="flex space-x-4 mt-4">
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-slate-500 rounded-[122px]">
              UI/UX
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-slate-500 rounded-[122px]">
              Development
            </button>
          </div>
        </div>

        <img
          className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-64 md:rounded-none md:rounded-r-lg"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
