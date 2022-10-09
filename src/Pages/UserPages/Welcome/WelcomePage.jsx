import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Images } from "../../../Assets/Images";
import LogoDesc from "../../../Components/WelCome/LogoDesc";

function WelcomePage() {
  return (
    <WelcomeBG>
      <Link to="/home" className="absolute top-36 left-1/2 right-0 w-5/12 -translate-x-1/2 cursor-pointer">
        <LogoDesc />
      </Link>
    </WelcomeBG>
  );
}

const WelcomeBG = styled.div(() => {
  return [
    `
     background: url(${Images.welcome}) no-repeat center center fixed;
     -webkit-background-size: cover;
     -moz-background-size: cover;
     -o-background-size: cover;
     background-size: cover;
   `,
    tw`h-screen w-full text-white relative overflow-hidden`
  ];
});
export default WelcomePage;
