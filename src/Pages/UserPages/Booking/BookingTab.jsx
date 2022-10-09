/* eslint-disable */

import React from "react";
import { Tabs } from "antd";
import Success from "./Success";
import { Title } from "../../../Components/Section/Title";
import Payment from "./Payment";
import ChooseSeat from "./ChooseSeat";
import Booking from "./Booking";
import DetailTicket from "./DetailTicket";

const onChange = key => {
};
export default function BookingTab() {
  return (
    <Tabs
      className="text-white"
      defaultActiveKey="1"
      onChange={onChange}
      items={[
        {
          label: <Title>01. Thông tin phim</Title>,
          key: "1",
          children: <DetailTicket />
        },
        {
          label: <Title>02. Choose seats</Title>,
          key: "2",
          children: <ChooseSeat />
        },
        {
          label: <Title>03. Payment</Title>,
          key: "3",
          children: <Payment />
        },
        {
          label: <Title className="text-xl font-medium">04. Success</Title>,
          key: "4",
          children: <Success />
        }
      ]}
    />
  );
}
