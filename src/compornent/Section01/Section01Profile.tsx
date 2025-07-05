import style from "./TopAbout.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const TopAboutProfile = () => {
  return (
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
          <Link href={}>
            <Image src={} />
          </Link>
          <Link href={}>
            <Image src={} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopAboutProfile;
