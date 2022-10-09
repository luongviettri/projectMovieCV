import styled from "styled-components";
import tw from "twin.macro";
export const Wrapper = styled.div`
  ${tw`w-1/4 p-5 overflow-hidden relative`}
`;
export const OverLay = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 1) 100%);
  ${tw`w-4/5 absolute bottom-16 left-1/2 -translate-x-1/2
  text-xl font-semibold transition-all duration-300 ease-linear opacity-0
  `}
  ${Wrapper}:hover & {
    opacity: 1;
  }
`;
