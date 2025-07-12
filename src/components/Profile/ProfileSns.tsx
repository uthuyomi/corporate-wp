"use client";

import { useEffect, useState } from "react";
import { AcfSns } from "@/types/acf";
import React from "react";
import style from "@/components/Profile.module.scss";
import Link from "next/link";
import Image from "next/image";

const ProfileSns = () => {
  const [sns, setSns] = useState<AcfSns[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/wp/v2/sns")
      .then((res) => res.json())
      .then((data: AcfSns[]) => setSns(data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>エラーが発生しました</p>;
  if (!sns) return <p>読み込み中...</p>;

  return (
    <div className={style.Profile_Data_sns}>
      {sns.map((item) => (
        <Link key={item.id} href={item.acf.sns_linkurl}>
          <div className={style.img}>
            <Image
              src={item.acf.sns_img_thumbnail}
              alt={item.acf.sns_img_thumbnail}
              width={100}
              height={100}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProfileSns;
