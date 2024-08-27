import React from "react";

interface CardInformationProps {
  profileImage: string;
  name: string;
  dept: string;
  date: string;
  image: string;
  title: string;
  body: string;
}

const Card = ({
  profileImage,
  name,
  dept,
  date,
  image,
  title,
  body,
}: CardInformationProps) => {
  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-lg md:flex-row md:max-w-4xl lg:max-w-5xl xl:max-w-6xl p-4">
      <div className="flex flex-col justify-between p-6 leading-normal">
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-montserrat text-[24.43px] font-semibold leading-[24.43px] text-center">
              {name} <span className="text-gray-500 text-sm">· {date}</span>
            </h3>
            <p className="text-gray-600">{dept}</p>
          </div>
        </div>
        <h5 className="mb-4 text-3xl font-bold tracking-tight">{title}</h5>
        <p className="mb-4 font-normal text-gray-700">{body}</p>
      </div>
      <img
        className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-64 md:rounded-none md:rounded-r-lg"
        src={image}
        alt=""
      />
    </div>
  );
};

export default Card;
