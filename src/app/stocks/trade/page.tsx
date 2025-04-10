"use client";

import React, {useState} from "react";
import styles from "./trade.module.css";
import StockOrder from "@/app/components/StockOrder";
import StockSelector from "@/app/components/StockSelector";
import StockChart from "@/app/components/StockChart";
import Community from "@/app/components/Community";

export default function Trade() {
  const [activeTab, setActiveTab] = useState<"chart" | "community">("chart");
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.stockList_section}>
        <StockSelector/>
      </div>
      
      <div className={styles.stockChart_section}>
        <div className={styles.topSection}>
          <div className={styles.chartTitle}>
            <label>여기 종목 이름</label>
            <div className={styles.btnGroup}>
              <button className={styles.bigBtn} onClick={() => setActiveTab('chart')}>차트</button>
              <button className={styles.bigBtn} onClick={() => setActiveTab('community')}>커뮤니티</button>
              <button className={`${styles.smallBtn} ${isFavorite ? styles.active : ''}`} onClick={() => setIsFavorite((prev) => !prev)}>★</button>
            </div>
          </div>
          <div className={styles.titleCantent}>
            <h1>종목번호</h1>
            <h1>KOSPI</h1>
            <span>종목가격</span>
            <h2>등락률</h2>
            <h2>대비</h2>
            <h1>거래량</h1>
            <h3>거래량 얼마</h3>
            <h1>거래대금</h1>
            <h3>거래대금 얼마</h3>
          </div>
        </div>
        {activeTab === "chart" ? (<StockChart activeTab={activeTab} setActiveTab={setActiveTab} />) : (<Community/>)}
      </div>
      
      <div className={styles.stockOrder_section}> 
        <StockOrder stockName="삼성전자" currentPrice={75000} />
      </div>
    </div>
  );
}