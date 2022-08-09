import Heading from "components/heading/Heading";
import React from "react";
import UpComing from "./components/UpComing";

export default function Siderbar() {
  return (
    <div className="sidebar w-[20%] rounded-l-[50px] rounded-b-l-[50px] bg-base-200 p-5">
      <UpComing />
      <div className="">
        <Heading>😙Continue watching</Heading>
        <div className="" />
      </div>
    </div>
  );
}
