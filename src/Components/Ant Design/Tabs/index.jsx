import React from "react";
import { Tabs } from "antd";
import "./Tab.css";

const Tab = ({ ArrayForMap, ...rest }) => {
  const { TabPane } = Tabs;
  return (
    <>
      <Tabs defaultActiveKey="0" {...rest}>
        {ArrayForMap.map((item, index) => {
          const { tab, Jsx } = item;
          return (
            <TabPane tab={tab} key={index}>
              {Jsx}
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
};

export default Tab;
