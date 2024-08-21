import React from "react";
import Discounted from "../components2/Discounted";
import Explore from "../components2/Explore";
import Featured from "../components2/Featured";
import Highlights from "../components2/Highlights";
import Landing from "../components/Landing";

const home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};
export default home;
