"use client";

import styles from "./nickname.module.css";
import NextButton from "@/app/components/NextButton";
import { useRouter } from "next/navigation";

export default function Nickname() {
  const router = useRouter();
  return (
    <div className={styles.container}>
        <div className={styles.nicknameContainer}>
            <h1 className={styles.nicknameTitle}>
                StockLeague에 오신 것을 환영합니다.
                <span>서비스 내에서 사용하실 닉네임을 적어주세요.</span>
                </h1>
            <div className={styles.nicknameContent}>
                <input type="text" id="nickname" className={styles.input} placeholder="닉네임을 입력해주세요"/>
                <button className={styles.duplicateBtn}>중복검사</button>
            </div>
            <NextButton text="회원가입" onClick={() => router.push("/auth/success")}/>
        </div>
    </div>
  );
}