import tw, { styled } from "twin.macro";
export const  Card = styled.div`
  ${tw`container mx-auto flex items-center justify-center 
  overflow-hidden rounded-xl shadow-lg
  transition-all ease-linear`}
  height: 80vh; 
  background-image: url("${props => props.backgroundImage || "https://picsum.photos/300/500"}" );
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  :hover {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%),
      url("${props => props.backgroundImage || "https://picsum.photos/300/500"}");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

Card.Content = styled.div`
  ${tw`absolute bottom-0 transition-all ease-linear opacity-0`}
  ${Card}:hover & {
    ${tw`transform -translate-y-1/4 opacity-100`}
  }
`;
