import styled, { keyframes } from "styled-components";

const size = 5 + "px";
const speed = 3;
const color = "antiquewhite";
const arrows = keyframes`
  0% {
    opacity: 0;
  }
  10%,90% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(100%) rotate(-45deg);
  }
`;

export const Arrow = styled.div`
  width: 20px;
  height: 20px;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-left: ${size} solid ${color};
    border-bottom: ${size} solid ${color};
    opacity: 1;
    transform: translateY(-100%) rotate(-45deg);
    animation: ${arrows} ${speed}s linear infinite;
  }
  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-left: ${size} solid ${color};
    border-bottom: ${size} solid ${color};
    transform: translateY(-100%) rotate(-45deg);
    animation: ${arrows} ${speed}s linear infinite ${speed - 2}s;
    opacity: 0;
  }
`;
