"use client";

import React, {useState} from "react";
import styles from "@/app/styles/components/StockSelector.module.css";
import FilterMenu from "./FilterMenu";
import SearchIcon from "@mui/icons-material/Search";
import { color } from "framer-motion";

export default function StockSelector() {
    
  const [selectedFilter, setSelectedFilter] = useState('전체종목');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <FilterMenu selected={selectedFilter} onChange={setSelectedFilter} />
        </div>
        <h1 className={styles.center}>{selectedFilter}</h1>
      </div>
      <div className={styles.search}>
        <div className={styles.searchBox}>
          <input/>
          <button>
            <SearchIcon style={{color: '#999999'}}/>
          </button>
        </div>
      </div>
    </div>
  );
}