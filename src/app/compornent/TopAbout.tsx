import React from "react";
import style from "./TopAbout.module.scss";
import Link from "next/link";

const TopAbout = () => {
  return (
    <div className={style.TopAbout}>
      <div className={style.Hero}>
        <div className={style.heading}>
          <h1></h1>
          <p></p>
          <Link></Link>
        </div>
      </div>
    </div>
  );
};

export default TopAbout;
