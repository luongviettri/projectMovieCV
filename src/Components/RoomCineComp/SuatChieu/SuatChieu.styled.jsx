import styled from "styled-components";
import tw from "twin.macro";

export const SuatStyled = styled.div`
  ${tw`my-2 w-4/5 cursor-pointer border-2  p-1 
   hover:border-primaryDark
   active:border-yellow-500
   `}
  ${props => (props.clicked ? tw`border-primaryDark` : tw`border-transparent`)}
`;
