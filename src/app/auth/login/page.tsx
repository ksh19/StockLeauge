"use client";

import React, { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
    const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize?client_id=YOUR_KAKAO_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";
    const NAVER_AUTH_URL = "https://nid.naver.com/oauth2.0/authorize?client_id=YOUR_NAVER_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <h2 className={styles.loginTitle}>소셜 로그인</h2>
                <h2 className={styles.loginContent}>
                    로그인된 정보는 오직 본 서비스 내에서만 사용되며,<br/>외부로 제공되지 않습니다.
                </h2>
                <div className={styles.buttonContainer}>
                    <a href={KAKAO_AUTH_URL} className={styles.kakaoButton}>
                        <img src="/images/kakao.png" alt="카카오 로그인" className={styles.logoImg}/>
                        kakao 로그인
                    </a>
                    <a href={NAVER_AUTH_URL} className={styles.naverButton}>
                        <img src="/images/naver.png" alt="네이버 로그인" className={styles.logoImg}/>
                        Naver 로그인
                    </a>
                </div>
            </div>
        </div>
    );
}
