import styled from "styled-components";

const directions = ["left", "top", "right", "bottom", "left"];
const size = "2px";
const duration = 1;
const delay = duration / 4; //4 sides

export const Dot = styled.span`
  position: absolute;
  display: block;
`;

export const Button = styled.button`
  color: red;
`;

function template(i) {
  if (i % 2 == 0) {
    return `
    ${Dot}:nth-child(${i + 1})  {
        width: ${size};
        height: 100%;
        background: linear-gradient(${i * 90}deg, transparent, #03e9f4);
        ${directions[i]}:0;
        ${directions[i + 1]}:100%;
        animation: btnAnim${i} ${duration}s linear infinite;
        animation-delay: ${i * delay}s;
    }`;
  } else {
    return `
    ${Dot}:nth-child(${i + 1})  {
        width: 100%;
        height: ${size};
        background: linear-gradient(${i * 90}deg, transparent, #03e9f4);
        ${directions[i]}:0;
        ${directions[i + 1]}:-100%;
        animation: btnAnim${i} ${duration}s linear infinite;
        animation-delay: ${i * delay}s;
    }`;
  }
}
function getAnimations() {
  let str = "";
  for (let index = 0; index < 4; index += 1) {
    str += template(index);
  }
  return str;
}
export const Trail = styled.p`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 20px;
  letter-spacing: 4px;
  :hover {
    background: #03e9f4;
    color: black;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
  }
  ${getAnimations()}
`;
