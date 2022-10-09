import styled from "styled-components";
import tw from "twin.macro";

const Section = styled.section(({ hasBG, final }) => {
  let bgPosition;
  let bigSize = "42%";
  let smallSize = "20%";
  let { big, small } = hasBG;
  bgPosition = `
    background: 
    radial-gradient(
      circle farthest-side at ${big},
      #07079F 0%, rgba(0, 0, 0, 0.6) ${bigSize},
      transparent
    ),
    radial-gradient(
      circle farthest-corner at ${small},
      #07079F 0%, rgba(0, 0, 0, 0.667) ${smallSize}
    );
    `;
  if (final) {
    if (big?.includes("right")) {
      bgPosition += `
      background: 
      radial-gradient(
        circle farthest-side at top right,
        #07079F 0%, rgba(0, 0, 0, 0.6) ${bigSize},
        transparent
        ),
        `;
    }
    if (big?.includes("left")) {
      bgPosition += `
      background: 
      radial-gradient(
        circle farthest-side at top left,
        #07079F 0%, rgba(0, 0, 0, 0.6) ${bigSize},
        transparent
      ),
      `;
    }
    if (small?.includes("right")) {
      bgPosition += `
      background:
      radial-gradient(
        circle farthest-corner at top right,
        #07079F 0%, rgba(0, 0, 0, 0.6) ${smallSize},
        transparent
      ),
      `;
    }
    if (small?.includes("left")) {
      bgPosition += `
      background:
      radial-gradient(
        circle farthest-corner at top left,
        #07079F 0%, rgba(0, 0, 0, 0.6) ${smallSize},
        transparent
      ),
      `;
    }
    bgPosition += `
    radial-gradient(
      circle farthest-side at bottom left,
      #07079F 0%, rgba(0, 0, 0, 0.6) 40%,
      transparent
    ),
    radial-gradient(
      circle farthest-side at bottom right,
      #07079F 0%, rgba(0, 0, 0, 0.667) 40%
    );
    `;
  }
  return [tw`w-full h-screen overflow-hidden`, bgPosition];
});
export default Section;
