import React from "react";
import ServiceItem from "@/compornent/Service/ServiceItem";
import style from "@/compornent/Service.module.scss";
import { AcfService as ServiceType } from "@/types/acf";

type ServiceProps = {
  service: {
    heading: string;
  };
  services: ServiceType[];
};

const Service = ({ service, services }: ServiceProps) => {
  return (
    <div className={style.Service}>
      <h2>{service.heading}</h2>
      {services.map((item) => (
        <ServiceItem key={item.id} acf={item} />
      ))}
    </div>
  );
};

export default Service;
