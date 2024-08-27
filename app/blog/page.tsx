"use client";
import Image from "next/image";
import { Provider } from "react-redux";
import { store } from "@/store";
import CardInformation from "../components/card/cardInformation";

export default function Home() {
  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Blogs</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search....."
            className="p-2 border border-gray-300 rounded-lg bg-white shadow-sm"
          />
          <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            + New Blog
          </button>
        </div>
      </div>
      <Provider store={store}>
        <CardInformation />
      </Provider>
    </div>
  );
}
