"use client";

import styles from "./terms.module.css";
import NextButton from "@/app/components/NextButton";

export default function TermsPage() {
  return (
    <div className={styles.container}>
        <div className={styles.termsContainer}>
            <h2 className={styles.termsTitle}>약관동의</h2>
            <div className={styles.termsContent}>
            </div>
            <NextButton text="다음"/>
        </div>
    </div>
  );
}