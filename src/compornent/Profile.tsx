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
    heading01: string;
    imgUrl: string;
    heading02: string;
    text: string;
  };
};


const TopAboutProfile = ({ profile, acf }: ProfileProps) => {
  const heading01 = acf.heading01 ? acf.heading01 : profile.heading01;
  const imgUrl = acf.imgUrl ? acf.imgUrl : profile.imgUrl;
  const heading02 = acf.heading02 ? acf.heading02 : profile.heading02;
  const text = acf.text ? acf.text : profile.text;

  
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
          {profile.sns.map((item) => (
            <Link href={item.link}>
              <Image
                src={item.imgUrl}
                alt={item.imgUrl}
                width={100}
                height={100}
              ></Image>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAboutProfile;
