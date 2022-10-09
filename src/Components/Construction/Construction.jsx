import React from "react";
import "./css/util.css";
import "./css/main.css";
import { Images } from "../../Assets/Images";
function Construction() {
  return (
    <div>
      <div
        className="bg-img1 size1 flex-w flex-c-m p-t-55 p-b-55 p-l-15 p-r-15"
        style={{
          backgroundSize: "cover",
          backgroundImage: 'url("https://media-cdn-v2.laodong.vn/Storage/newsportal/2019/4/13/727718/Tram-Anh43.jpg")'
        }}>
        <div className="wsize1 bor1 bg1 p-t-175 p-b-45 p-l-15 p-r-15 respon1">
          <div className="wrappic1">
            <img src={Images.gifLogo} alt="LOGO" />
          </div>
          <p className="txt-center m1-txt1 p-t-33 p-b-68">Website chúng tui đang hoàn thiện vui lòng quay lại sau :D</p>
          <div className="wsize2 flex-w flex-c hsize1 cd100">
            <div className="flex-col-c-m size2 how-countdown">
              <span className="l1-txt1 p-b-9 days">35</span>
              <span className="s1-txt1">Days</span>
            </div>
            <div className="flex-col-c-m size2 how-countdown">
              <span className="l1-txt1 p-b-9 hours">17</span>
              <span className="s1-txt1">Hours</span>
            </div>
            <div className="flex-col-c-m size2 how-countdown">
              <span className="l1-txt1 p-b-9 minutes">50</span>
              <span className="s1-txt1">Minutes</span>
            </div>
            <div className="flex-col-c-m size2 how-countdown">
              <span className="l1-txt1 p-b-9 seconds">39</span>
              <span className="s1-txt1">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Construction;
