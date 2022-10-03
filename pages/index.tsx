import type { NextPage } from "next";
import React from "react";
import Topbar from "../components/common/Topbar";
import MapHolder from "../components/Map/MapHolder";
import { PopupInfo } from "../types/types";

const Home = ({ cities }: { cities: PopupInfo[] }) => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="h-[calc(100vh-100px)] w-full bg-[#D6D5D5]">
        <MapHolder cities={cities} />
      </div>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.npoint.io/5ee931de6a99ee36adec");
  const cities = await res.json();

  return { props: { cities } };
}

export default Home;
