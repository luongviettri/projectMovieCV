import styled from "styled-components";

export const TicketStyled = styled.div`
  width: auto;
  height: auto;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 1)),
    url(${props => (props.bgIMG ? props.bgIMG : "")});
  background-position: center;
  background-size: cover;
  border-bottom-right-radius: 4%;
  border-bottom-left-radius: 4%;
  position: relative;
  overflow: hidden;
`;
