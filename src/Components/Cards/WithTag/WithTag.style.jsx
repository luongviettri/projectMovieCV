import tw, { styled } from "twin.macro";

export const Card = styled.div`
  ${tw`transition-all ease-linear`}
  position: relative;
  overflow: hidden;
  height: 80vh;
  background-image: url(${props => props.backgroundImage});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  :hover {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%),
    url(${props => props.backgroundImage});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  ::after {
    content: "${({ tag }) => tag}";
    ${tw`absolute top-6 -right-1/4 w-full h-10 bg-primaryDark flex justify-center items-center`}
    transform: rotate(45deg);
  }
`;

Card.Content = styled.div`
  ${tw`w-10/12 absolute bottom-0 left-1/2 -translate-x-1/2 transition-all ease-linear opacity-0`}
  ${Card}:hover & {
    ${tw`transform -translate-y-1/4 opacity-100`}
  }
`;
