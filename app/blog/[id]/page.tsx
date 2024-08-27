"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../store";
import Fetch from "@/app/cards/Fetch";

interface idParmsType {
  params: {
    id: string;
  };
}

const page = ({ params }: idParmsType) => {
  return (
    <Provider store={store}>
      <Fetch id={params.id} />
    </Provider>
  );
};

export default page;
