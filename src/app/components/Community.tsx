"use client";

import React from "react";
import styles from "@/app/styles/components/Community.module.css";

export default function Community() {
    return (
        <div className={styles.container}>
            <h1>
                종목이름 커뮤니티
            </h1>
            
            <div>
                <input type="text"/>
                <button>의견 남기기</button>
            </div>
            <div>
                
            </div>
        </div>
    );
}