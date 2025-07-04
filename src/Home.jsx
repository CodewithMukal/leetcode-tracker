import { Card } from "./components/Card";
import React from "react";

export const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center lg:grid lg:grid-cols-2 w-fit mx-auto lg:gap-12 lg:my-6">
        <Card user="mukalcode" />
        <Card user="thedevsumit" />
         <Card user="krishN_99" />
        <Card user="vedant_8075" />
        <Card user="aravtyagi0001" />
        <Card user="Ankush_Kharb" />
      </div>
    </div>
  );
};
