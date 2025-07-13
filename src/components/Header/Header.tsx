import React from "react";
import style from "@/components/Header/Header.module.scss";
import Navi from "@/components/Navi/Navi";

const Header = () => {
  return (
    <header className={style.header}>
      <Navi />
    </header>
  );
};

export default Header;
