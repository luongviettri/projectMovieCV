import styled from "styled-components";
import tw from "twin.macro";

export const Header = styled.header(({ isShow }) => {
  return [
    tw`h-20 max-h-20 w-full flex overflow-hidden
    fixed z-50 bg-black bg-opacity-60
    transition-all duration-500
    hover:top-0
    `,
    isShow === "down" ? tw`top-0` : tw`-top-16`
  ];
});
