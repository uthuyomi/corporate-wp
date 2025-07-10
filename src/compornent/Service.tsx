"use client";

import { useEffect, useState } from "react";
import ServiceItem from './Service/ServiceItem';
import { AcfService } from "@/types/acf";
import style from "./Service.module.scss";

type Props = {
  service: {
    heading: string;
  };
};

const Service = ({ service }: Props) => {
  const [services, setServices] = useState<AcfService[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(
      "https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/wp/v2/service"
    )
      .then((res) => res.json())
      .then((data: AcfService[]) => setServices(data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>エラーが発生しました</p>;
  if (!services) return <p>読み込み中...</p>;

  return (
    <div className={style.Service}>
      <h2>{service.heading}</h2>
      <div className={style.ServiceList}>
        {services.map((item) => (
          <ServiceItem key={item.id} acf={item} />
        ))}
      </div>
    </div>
  );
};

export default Service;
