import { Card } from "./components/Card";
import React from "react";

export const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-fit mx-auto gap-12 my-6">
        <Card user="mukalcode" />
        <Card user="thedevsumit" />
        <Card user="krishN_99" />
        <Card user="vedant_8075" />
      </div>
    </div>
  );
};
