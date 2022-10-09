import React from "react";
import NewsHomePage from "../NewsHomePage";

function AboutUs() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-4 mx-auto w-11/12">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum recusandae quibusdam magnam quod illum
          accusantium eos repudiandae unde eaque architecto! Pariatur, quia! Inventore, repellat ipsam sit rem
          doloremque ad similique?
        </p>
        <p className="my-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi alias dolor id ipsa molestias debitis rerum
          ratione, suscipit deleniti ut iusto libero iste quas, sapiente porro dolores aperiam sint officiis minus est.
          Molestiae dolorum voluptas quia est hic blanditiis, nostrum similique quos exercitationem, maxime facilis
          quidem dolores accusantium maiores voluptates nihil veniam! Amet esse consequatur temporibus architecto id qui
          possimus quibusdam expedita! Maiores vero facilis accusantium quam officiis officia fuga voluptate nobis
          consectetur totam, eveniet sapiente asperiores, dolores quis? Soluta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias nobis, nisi qui esse dolorum sunt ea iste
          dolores quas cum sit excepturi, non omnis earum laboriosam suscipit? Quibusdam, sit, reiciendis quas
          voluptatum at placeat non, recusandae dolore et distinctio vero?
        </p>
      </div>
      <div className="col-span-6 flex items-center justify-center">
        <div className="w-full">
          <NewsHomePage />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
