"use client";

import React, {useState} from "react";
import styles from "@/app/styles/components/MyOrder.module.css";
import TabMenu from "./TabMenu";

export default function MyOrder() {
  const [activeTab, setActiveTab] = useState("체결 내역");
  const tabList = ["체결 내역", "미체결 내역"];
    
  return (
    <div className={styles.container}>
      <TabMenu
        tabs={tabList}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        tabTextSize="1rem"
      />
      <div className={styles.orderStatus}>
        거래 내역이 없습니다.
      </div>
    </div>
    );
}