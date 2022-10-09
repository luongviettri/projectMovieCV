import React from "react";
import Ant from "../../../Components/Ant Design";
import { Title } from "../../../Components/Section/Title";
import About from "./About";

function AboutHomePage() {
  let data = [
    { tab: "About Us", Jsx: <About.AboutUs /> },
    { tab: "Hall", Jsx: <About.Hall /> },
    { tab: "About Việt Trí", Jsx: <About.Sunny /> },
    { tab: "From Lao's East", Jsx: <About.VN /> }
  ];
  return (
    <div className="mx-auto flex h-full w-11/12 flex-col">
      <Title>About Cinema Center</Title>
      <div className="mt-10 flex h-full w-full justify-center">
        <Ant.Tab ArrayForMap={data} tabPosition="top" style={{ width: "90%", height: "auto", color: "white  " }} />
      </div>
    </div>
  );
}

export default AboutHomePage;
