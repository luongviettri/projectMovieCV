import React from "react";
import Ant from "../../../../Components/Ant Design";

function OtherOfRap() {
  return (
    <div className="mt-6 border-2 border-red-500 ">
      <Ant.Tab
        tabBarStyle={{ width: "30%" }}
        tab
        tabPosition="left"
        ArrayForMap={[
          {
            tab: (
              <div className="text-left ">
                <p>tenCumRap: CNS - Hai Bà Trưng</p>
                <p>diaChi: 135 Hai Bà Trưng, Bến Nghé, Q.1Bản đồ</p>
              </div>
            ),
            Jsx: "Render những phim khác tại rạp"
          },
          {
            tab: (
              <div className="text-left  ">
                <p>tenCumRap: CNS - Hai Bà Trưng</p>
                <p>diaChi: 135 Hai Bà Trưng, Bến Nghé, Q.1Bản đồ</p>
              </div>
            ),
            Jsx: "Render những phim khác tại rạp"
          }
        ]}
      />
    </div>
  );
}

export default OtherOfRap;
