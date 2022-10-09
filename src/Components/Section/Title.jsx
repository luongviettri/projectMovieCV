import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

const gradient = keyframes`
	0% {
		background-position: 150%;
	}
	50% {
		background-position: 50%;
	}
	100% {
		background-position: -50%;
	}
`;

export const Title = styled.div`
  ${tw`font-semibold text-2xl relative`}
  ::before {
    content: "";
    ${tw`inline-block w-14 h-1 absolute left-0 -bottom-1.5 rounded-full`}
    background: linear-gradient(to right,rgba(0, 0, 0, 0) 15%,#0404ff,#07079F,#a608b1,rgba(0, 0, 0, 0) 85%);
    background-size: 200% 100%;
    animation: ${gradient} 3s linear infinite;
  }
`;
