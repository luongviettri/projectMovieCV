import styled from "styled-components";
import tw from "twin.macro";

export const ButtonBackground = styled.p`
  ${tw`relative inline-block items-center justify-start overflow-hidden 
  px-4 py-2 font-bold bg-primaryDark border-primaryLight border-2 cursor-pointer`}
  &:hover {
    ${tw`bg-white transition-all delay-200 ease-in-out`}
  }
`;
export const ButtonTrans = styled(ButtonBackground)`
  ${tw`bg-transparent text-white`}
`;
export const DashBg = styled.span`
  ${tw`absolute right-0 top-0 h-40 w-32 rotate-45 
  translate-x-16 -translate-y-2  bg-gray-500 opacity-[20%]`}
`;
export const Overlay = styled.span`
  ${tw`absolute top-0 left-0
  h-48 w-48 -translate-x-full
  rotate-45 bg-white opacity-0
  transition-all duration-500 ease-in-out`}
  ${ButtonBackground}:hover & {
    ${tw`translate-x-full opacity-100`}
  }
  ${ButtonTrans}:hover & {
    ${tw`bg-transparent`}
  }
`;
export const Text = styled.span`
  ${tw`relative w-full text-left text-white 
  transition-colors duration-200 ease-in-out`}
  ${ButtonBackground}:hover & {
    ${tw`text-primaryLight`}
  }
`;
