import React, { useEffect } from "react";
import Section from "../../../Components/Section/Section.styled";
import Banner from "./Banner";
import AboutHomePage from "./AboutHomePage";
import NewsHomePage from "./NewsHomePage";
import ComingSoon from "./ComingSoon";
import PopularNow from "./PopularNow";

export default function HomePage() {
  useEffect(() => {  // ! chỗ này chỉnh khi vào detail thì nhảy lên đầu trang
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Section hasBG={{ big: "top left", small: "bottom right" }}>
        <Banner />
      </Section>
      <Section hasBG={{ small: "right", big: "bottom left" }}>
        <PopularNow />
      </Section>
      <Section hasBG={{ big: "top left", small: "bottom right" }}>
        <ComingSoon />
      </Section>
      <Section hasBG={{ small: "top right", big: "bottom left" }}>
        <NewsHomePage />
      </Section>
      <Section hasBG={{ big: "top left" }} final>
        <AboutHomePage />
      </Section>
    </>
  );
}
