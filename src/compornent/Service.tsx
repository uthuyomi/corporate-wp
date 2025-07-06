import React from 'react';
import ServiceItem from '@/compornent/Service/ServiceItem';
import style from '@/compornent/Service.module.scss';

type ServiceProps = {
  service: {
    heading: string;
  }
}

const Service = ({service}: ServiceProps) => {
  return (
    <div className={style.Service}>
      <h2>{service.heading}</h2>
      <ServiceItem/>
    </div>
  )
}

export default Service