import styled from "styled-components";
import tw from "twin.macro";

export const SeatStyled = styled.button`
  ${tw`py-2 bg-green-300 text-primaryDark font-bold rounded-lg`}
`;
export const Booked = styled.button`
  ${tw`bg-gray-900 cursor-not-allowed rounded-lg`}
`;

export const Reserved = styled(SeatStyled)`
  ${tw`bg-primaryDark text-white`}
`;
export const SeatVip = styled(SeatStyled)`
  ${tw`py-2 bg-yellow-300 text-primaryDark font-bold`}
`;
