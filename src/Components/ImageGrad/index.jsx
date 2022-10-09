import styled from "styled-components";
export const ImageGradBottom = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)),
    url(${props => props.backgroundImage || "https://picsum.photos/200"});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ImageBgRight = styled(ImageGradBottom)`
  background-image: linear-gradient(145deg, rgba(0, 0, 0, 0) 66%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 1)),
    url(${props => props.backgroundImage || "https://picsum.photos/200"});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 60% 100%;
`;
