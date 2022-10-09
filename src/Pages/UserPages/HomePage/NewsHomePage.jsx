import React, { useEffect, useState } from "react";
import { Title } from "../../../Components/Section/Title";
import Slider from "../../../Components/Slider";
import NewsService from "../../../Services/NewsService";

function NewsHomePage() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    NewsService.then(res => {
      setNews(res);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className="mx-auto flex h-full w-11/12 flex-col py-10">
      <Title>News</Title>
      <div className="mt-10 flex h-full w-full justify-center">
        <div className="w-11/12">
          <Slider.Center NewsArr={news} />
        </div>
      </div>
    </div>
  );
}

export default NewsHomePage;
