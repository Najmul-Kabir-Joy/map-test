import type { NextPage } from "next";
import React from "react";
import Topbar from "../components/common/Topbar";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="h-[calc(100vh-100px)] w-full bg-[#D6D5D5]"></div>
    </React.Fragment>
  );
};

export default Home;
