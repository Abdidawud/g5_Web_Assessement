import React from "react";

interface RelatedBlogCardProps {
  image: string;
  title: string;
  profileImage: string;
  authorName: string;
  date: string;
  description: string;
  likes: number;
}

const RelatedBlogCard = () => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src="/related.png"
        alt="image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          Design Liberalized Exchange Rate Management
        </h2>
        <div className="flex items-center mb-4">
          <img
            src="/profile.png"
            alt="Profile Image"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-medium">by Fred Boone</p>
            <p className="text-sm text-gray-500">Jan 10,2020</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-slate-500 rounded-[122px]">
            UI/UX
          </button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-slate-500 rounded-[122px]">
            Development
          </button>
        </div>
        <p className="text-gray-700 mb-4">
          A little Personality goes a long way, especially on a business blo. So
          don't be afraid to let loose
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">2.3K Likes</span>
          </div>
          <a href="#" className="text-blue-500 hover:underline">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
