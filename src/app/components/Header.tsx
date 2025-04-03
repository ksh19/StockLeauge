import React from "react";
import styles from "@/app/styles/components/Header.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.leftHeader}>
            <a href="/" className={styles.logo}>
                <div className={styles.stock}>STOCK</div>
                <div className={styles.league}>League</div>
            </a>
            <DropdownMenu/>
        </div>

        <div className={styles.rightHeader}>
            <a href="/auth/login" className={styles.signIn}>로그인</a>
            <a href="/auth/login" className={styles.signUp}>회원가입</a>
            <div className={styles.menuToggle}>
                <MobileMenu />
            </div>
        </div>
      </header>
    );
  }