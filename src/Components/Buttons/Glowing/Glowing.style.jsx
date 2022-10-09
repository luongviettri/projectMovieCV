import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { ButtonBackground } from "../Button.styled";

const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;
export const GlowingBg = styled.span`
  width: calc(100% + 8%);
  height: calc(100% + 8%);
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #a608b1, #ff0000);
  background-size: 400%;
  ${tw`absolute -top-1 -left-1 rounded-xl`}
  z-index: -1;
  opacity: 0;
  filter: blur(5px);
  animation: ${glowing} 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
`;
export const Content = styled.span`
  ${tw`w-full h-full inline-flex justify-center items-center absolute top-0 left-0 rounded-xl`}
  z-index: 1;
`;
export const GlowingStyle = styled(ButtonBackground)`
  width: 100px;
  height: 50px;
  color: whitesmoke;
  ${tw`text-lg overflow-visible bg-transparent z-0 border-0`}
  :hover {
    ${tw`bg-transparent`}
    ${Content} {
      ${tw`bg-black`}
    }
    ${GlowingBg} {
      opacity: 1;
    }
  }
  :active {
    ${Content} {
      border: 2px solid #07079f;
      ${tw`bg-transparent text-black`};
    }
  }
`;
