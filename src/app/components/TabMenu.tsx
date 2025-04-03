"use client";

import React, {useState} from "react";
import styles from "@/app/styles/components/TabMenu.module.css";

export default function TabMenu() {
    const [activeTab, setActiveTab] = useState("전체");

    return (
        <div className={styles.tabs}>
          {["전체", "인기", "관심"].map((tab) => (
            <button 
            key={tab} 
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
    );
}