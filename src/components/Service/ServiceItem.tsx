"use client";

import { useEffect, useState } from "react";
import { AcfService } from "@/types/acf";
import React from "react";
import Image from "next/image";
import style from "@/components/Service.module.scss";


const ServiceItem = () => {
  const [services, setServices] = useState<AcfService[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/wp/v2/service")
      .then((res) => res.json())
      .then((data: AcfService[]) => setServices(data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>エラーが発生しました</p>;
  if (!services) return <p>読み込み中...</p>;

  return (
    <>
      {services.map((item, index) => (
        <div
          key={item.id}
          className={`${style.Service_Item} ${
            index % 2 === 0 ? style.left : style.right
          }`}
          style={{ marginTop: index === 0 ? 0 : "-100px", }}
        >
          <div className={style.img}>
            <Image
              src={item.acf.service_item_thumbnail}
              alt="サムネイル"
              width={100}
              height={100}
            />
          </div>
          <h3>{item.acf.service_item_title}</h3>
          <p>{item.acf.service_item_text}</p>
        </div>
      ))}
    </>
  );
};

export default ServiceItem;
