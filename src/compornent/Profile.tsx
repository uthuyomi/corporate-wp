import style from "@/compornent/Profile.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type ProfileProps = {
  profile: {
    heading01: string;
    imgUrl: string;
    heading02: string;
    text: string;
  };
  acf: {
    profile_heading01: string;
    profile_imgUrl: string;
    profile_heading02: string;
    profile_text: string;
  };
};

const TopAboutProfile = ({ profile, acf }: ProfileProps) => {
  const heading01 = acf.profile_heading01
    ? acf.profile_heading01
    : profile.heading01;
  const imgUrl = acf.profile_imgUrl ? acf.profile_imgUrl : profile.imgUrl;
  const heading02 = acf.profile_heading02
    ? acf.profile_heading02
    : profile.heading02;
  const text = acf.profile_text ? acf.profile_text : profile.text;

  return (
    <div className={style.Profile}>
      <h2>{heading01}</h2>
      <div className={style.img}>
        <Image src={imgUrl} alt="hello" width={100} height={200} />
      </div>
      <div className={style.Profile_Data}>
        <h3>{heading02}</h3>
        <p>{text}</p>
        <div className={style.Profile_Data_sns}>
        </div>
      </div>
    </div>
  );
};

export default TopAboutProfile;
