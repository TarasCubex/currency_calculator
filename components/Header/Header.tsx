import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import LoginButton from "../LoginButton/LoginButton";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
import CurrencySlidedown from "./CurrencySlidedown/CurrencySlidedown";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  return (
    <header className={styles.header_container}>
      <div className={styles.burgr_container}>
        <button
          className={styles.burger}
          onClick={() => setIsOpenMenu((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <Image src="/img/Logo.png" alt="logo" width={110} height={40} priority />
      <NavBar />
      <div className={styles.wrap}>
        <CurrencyDropdown />
        <Link href="/">Sing Up</Link>
        <LoginButton />
      </div>
      <menu
        className={
          isOpenMenu
            ? styles["mobile_menu-open"] + " " + styles.mobile_menu
            : styles["mobile_menu-closed"] + " " + styles.mobile_menu
        }
      >
        <li>
          <button onClick={() => setIsOpenMenu(false)}>
            <span></span>
            <span></span>
          </button>
        </li>
        <li>OSRS Gold</li>
        <li>RS3 Gold</li>
        <li>Sell RS Gold</li>
        <li>OSRS Items</li>
        <li>OSRS Accounts</li>
        <li>Reward Chests</li>
        <li>
          <CurrencySlidedown />
        </li>
        <li>
          <Link href="/">SIng Up</Link>
          <LoginButton />
        </li>
      </menu>
    </header>
  );
};

export default Header;
