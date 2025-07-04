import React from "react";
import style from "./TopAbout.module.scss";
import Link from "next/link";
import Image from "next/image";

const TopAbout = () => {
  return (
    <div className={style.TopAbout}>
      <div className={style.TopAbout_Hero}>
        <div className={style.TopAbout_Hero_heading}>
          <h1></h1>
          <p></p>
          <Link href={}></Link>
        </div>
      </div>
      <div className={style.topAbout_About}>
        <h2>about</h2>
        <div className={style.topAbout_About_img}>
          <Image src={} alt="hello" width={100} height={200} />
        </div>
        <div className={style.topAbout_About_style}>
          <h3>安崎　海星</h3>
          <p>
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          </p>
          <div className={style.topAbout_About_Sns}>
            <Link href={ }>
              <Image src={ } />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAbout;
